import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Repository, getManager } from 'typeorm';
import { Post } from '../../database/entities/posts.entity';
import { PostComment } from '../../database/entities/comments.entity';
import { SystemError } from '../../common/exceptions/system.error';
import { isAdmin } from '../../common/util-services/is-admin';

@Injectable()
export class CommentsService {
  public constructor(
    @InjectRepository(PostComment)
    private readonly commentsRepository: Repository<PostComment>,
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  public async getAllPostComments(postId: string) {
    const post = await getManager()
      .createQueryBuilder(Post, 'post')
      .leftJoinAndSelect(
        'post.comments',
        'comment',
        'comment.isDeleted = :isDeleted',
        { isDeleted: false },
      )
      .leftJoinAndSelect('comment.user', 'user')
      .where('post.id = :id', { id: postId })
      .getOne();
    if (!post) {
      throw new SystemError('Post not found', 400);
    }
    return post.comments;
  }

  public async getAllUserComments(userId: string) {
    const user = await getManager()
      .createQueryBuilder(User, 'user')
      .leftJoinAndSelect(
        'user.comments',
        'comment',
        'comment.isDeleted = :isDeleted',
        { isDeleted: false },
      )
      .leftJoinAndSelect('comment.post', 'post')
      .where('user.id = :id', { id: userId })
      .getOne();
    if (!user) {
      throw new SystemError('User not found', 400);
    }
    return user.comments;
  }

  public async createComment(userId: string, postId: string, content: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId, isDeleted: false },
    });

    if (!user) {
      throw new SystemError('User not found', 400);
    }

    const post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });

    if (!post) {
      throw new SystemError('Post not found', 400);
    }

    const comment = {
      content,
    };

    const commentEntity = this.commentsRepository.create(comment);
    commentEntity.user = user;
    commentEntity.post = post;
    commentEntity.isDeleted = false;

    return await this.commentsRepository.save(commentEntity);
  }

  public async getCommentedPosts(userId: string) {
    const user = await this.usersRepository.findOne({
      where: { id: userId, isDeleted: false },
    });
    const comments = await this.commentsRepository.find({
      where: { user },
      relations: ['post'],
    });

    return await Promise.all(comments.map((item: any) => item.post));
  }

  public async editContent(
    userId: string,
    commentId: string,
    newContent: string,
  ) {
    const comment = await this.commentsRepository.findOne({
      where: { id: commentId, isDeleted: false },
    });
    if (!comment) {
      throw new SystemError('No such comment found', 400);
    }
    const commentOwner = await comment.user;
    if (!isAdmin(commentOwner)) {
      if (commentOwner.id !== userId) {
        throw new SystemError(`This user can't edit the comment`, 400);
      }
    }
    comment.content = newContent;

    return await this.commentsRepository.save(comment);
  }

  public async removeComment(userId: string, commentId: string) {
    const comment = await this.commentsRepository.findOne({
      where: { id: commentId, isDeleted: false },
      relations: ['user'],
    });

    if (!comment) {
      throw new SystemError('Comment does not exist', 400);
    }

    const user = await comment.user;
    if (!isAdmin(user)) {
      if (!user || user.id !== userId) {
        throw new SystemError(`This user can't delete this comment`, 400);
      }
    }

    comment.isDeleted = true;

    this.commentsRepository.save(comment);
    return {
      message: 'Comment Deleted',
    };
  }
}
