import { ShowAvatarUrlDTO } from './../users/models/show-avatarUrl.dto';
import { ShowUserOnPost } from './../users/models/show-user-on-post.dto';
import { ShowUserDTO } from './../users/models/show-user.dto';
import { CreatePostDTO } from './models/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../../database/entities/posts.entity';
import { User } from '../../database/entities/users.entity';
import { SystemError } from '../../common/exceptions/system.error';
import { symbol } from '@hapi/joi';

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
    });

    return posts;
  }

  public async allPostsByFollowed(username: string) {
    const currentUser = await this.usersRepository.findOne({
      where: { username, isDeleted: false },
      relations: ['followers', 'followers.posts'],
    });
    const followers = await currentUser.followers;
    console.log(followers);
    const posts = followers.map(follower => follower.posts);
    console.log(posts);
    return Promise.all(posts);
  }

  public async getAllPostsByUser(userId: string) {
    const posts: Post[] = await this.postsRepository.find({
      where: { userId },
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
    });
    if (posts) {
      return posts;
    } else {
      throw new SystemError('User has no posts.');
    }
  }

  public async createPost(creatorId: string, post: CreatePostDTO) {
    const createdPost = await this.postsRepository.create(post);
    const creator: User = await this.usersRepository.findOne({
      where: { id: creatorId },
    });
    createdPost.likes = [];
    createdPost.comments = [];
    const postToSave = { ...createdPost, user: creator };
    return await this.postsRepository.save(postToSave);
  }

  public async findPostById(postId: string): Promise<Post> {
    const foundPost: Post = await this.postsRepository.findOne({ id: postId });
    if (foundPost === undefined || foundPost.isDeleted) {
      throw new SystemError('No such post found', 404);
    }
    return foundPost;
  }

  public async deletePost(userId: string, postId: string) {
    const foundPost: Post = await this.findPostById(postId);
    const loggedUser: User = await this.usersRepository.findOne({
      where: { id: userId },
    });
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
