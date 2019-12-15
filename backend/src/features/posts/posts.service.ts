import { isAdmin } from './../../common/util-services/is-admin';
import { CreatePostDTO } from './models/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, In } from 'typeorm';
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

  public async allPosts(take: number, skip: number) {
    const posts: Post[] = await this.postsRepository.find({
      where: { isDeleted: false, isPrivate: false },
      order: { postedOn: 'DESC' },
      take: +take,
      skip: +skip,
    });
    if (posts) {
      const filterPosts = posts.filter(
        post => post.user && post.user.isDeleted === false,
      );
      return filterPosts;
    }
    return [];
  }

  public async allPostsByFollowed(
    username: string,
    take: number,
    skip: number,
  ) {
    const currentUser = await this.usersRepository.findOne({
      where: { username, isDeleted: false },
      relations: ['followed', 'followed.posts'],
    });

    if (!currentUser) {
      throw new SystemError('User not found', 404);
    }

    const users = await currentUser.followed;

    if (!users) {
      throw new SystemError('User has not followed any users.');
    }

    const followedUsersPosts = users.map((user: User) => {
      if (user.isDeleted === false) {
        return user.posts;
      }
    });

    const resolvedPosts = await Promise.all(followedUsersPosts);
    const flattenedPosts = resolvedPosts.reduce(
      (acc, val) => acc.concat(val),
      [],
    );

    if (!resolvedPosts) {
      throw new SystemError('Followed users have no posts');
    }

    const follwedUsersPostsIds = flattenedPosts.map((post: any) => {
      if (post && post.user && post.isDeleted === false) {
        return post.id;
      }
    });

    if (!follwedUsersPostsIds) {
      throw new SystemError('Followed users have no posts');
    }

    let posts = [];

    try {
      posts = await this.postsRepository.find({
        where: { id: In(follwedUsersPostsIds), isDeleted: false },
        order: { postedOn: 'DESC' },
        take: +take,
        skip: +skip,
      });
    } catch {
      return [];
    }
    return posts;
  }

  public async getAllPostsByUser(userId: string) {
    const posts: Post[] = await this.postsRepository.find({
      where: { userId, isDeleted: false },
      order: { postedOn: 'DESC' },
    });
    return posts;
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
    const post: Post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
      relations: ['comments', 'likes'],
    });

    if (!post) {
      throw new SystemError('No such post found', 404);
    }

    post.comments = post.comments.filter(
      comment => comment.isDeleted === false && comment.user,
    );
    post.likes = post.likes.filter(like => like.isLiked === true && like.user);

    return post;
  }

  public async editPost(userId: string, postId: string, newContent: string) {
    const post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });
    if (!post) {
      throw new SystemError('No such post found', 400);
    }
    const postOwner = post.user;
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
