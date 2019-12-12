import { isAdmin } from './../../common/util-services/is-admin';
import { CreatePostDTO } from './models/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../../database/entities/posts.entity';
import { User } from '../../database/entities/users.entity';
import { SystemError } from '../../common/exceptions/system.error';

@Injectable()
export class PostsService {
  public constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // Public and Private posts -> we will filter them on the front-end
  public async allPosts() {
    const posts: Post[] = await this.postsRepository.find({
      where: { isDeleted: false },
      order: { postedOn: 'DESC' },
    });

    return posts;
  }

  public async allPostsByFollowed(username: string) {
    const currentUser = await this.usersRepository.findOne({
      where: { username, isDeleted: false },
      relations: ['followed', 'followed.posts'],
    });
    const followed = await currentUser.followed;
    const posts = followed.map(followedUser => followedUser.posts);
    return Promise.all(posts);
  }

  public async getAllPostsByUser(userId: string) {
    const posts: Post[] = await this.postsRepository.find({
      where: { userId },
      order: { postedOn: 'DESC' },
    });
    if (posts) {
      return posts;
    } else {
      throw new SystemError('User has no posts.');
    }
  }

  public async getPublicPostsByUser(userId: string) {
    const posts: Post[] = await this.postsRepository.find({
      where: { userId, isPrivate: false },
      order: { postedOn: 'DESC' },
    });
    if (posts) {
      return posts;
    } else {
      throw new SystemError('User has no posts.');
    }
  }

  public async createPost(creatorId: string, post: CreatePostDTO) {
    const createdPost = await this.postsRepository.create();
    const creator: User = await this.usersRepository.findOne({
      where: { id: creatorId },
    });
    createdPost.likes = [];
    createdPost.comments = [];
    createdPost.description = post.description;
    createdPost.isPrivate = post.isPrivate;
    createdPost.photoUrl = post.photoUrl;

    const postToSave = { ...createdPost, user: creator };
    return await this.postsRepository.save(postToSave);
  }

  public async findPostById(postId: string): Promise<Post> {
    const foundPost: Post = await this.postsRepository.findOne({
      id: postId,
      isDeleted: false,
    });
    const foundComments = await foundPost.comments;
    foundPost.comments = foundComments.filter(comment => !comment.isDeleted);

    if (foundPost === undefined || foundPost.isDeleted) {
      throw new SystemError('No such post found', 404);
    }
    return foundPost;
  }

  public async editPost(userId: string, postId: string, newContent: string) {
    const post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });
    if (!post) {
      throw new SystemError('No such post found', 400);
    }
    const postOwner = await post.user;
    if (!isAdmin(postOwner)) {
      if (postOwner.id !== userId) {
        throw new SystemError('This user cannot edit this post', 400);
      }
    }
    post.description = newContent;

    return await this.postsRepository.save(post);
  }

  public async deletePost(userId: string, postId: string) {
    const foundPost: Post = await this.findPostById(postId);

    if (!foundPost) {
      throw new SystemError('Post not found', 400);
    }

    const loggedUser: User = await this.usersRepository.findOne({
      where: { id: userId },
    });

    if (!isAdmin(loggedUser)) {
      if (!loggedUser || loggedUser.id !== userId) {
        throw new SystemError('This user cannot delete this post', 400);
      }
    }

    if (foundPost.user.username === loggedUser.username) {
      const savedPost: Post = await this.postsRepository.save({
        ...foundPost,
        isDeleted: true,
      });
      return savedPost;
    } else {
      throw new SystemError('You have no permission to do that!', 401);
    }
  }
}
