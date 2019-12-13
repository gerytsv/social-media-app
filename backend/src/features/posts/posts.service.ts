import { CreatePostDTO } from './models/create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
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
      where: { isDeleted: false, isPrivate: false },
      order: { postedOn: 'DESC' },
    });

    const filterPosts = posts.filter(post => post.user.isDeleted === false);

    return filterPosts;
  }

  public async allPostsByFollowed(username: string) {

    const currentUser = await this.usersRepository.findOne({
      where: { username, isDeleted: false },
      relations: ['followed' , 'followed.posts']
    });

    const followed = await currentUser.followed;
    const posts = followed.map(followedUser => followedUser.posts);
    const readyPosts = await Promise.all(posts);

    const flattednedPosts = readyPosts.flat(2);
    const sorted = flattednedPosts.sort(
      (x: any, y: any) => y.postedOn - x.postedOn,
    );
    return sorted;
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
      where: {id: postId , isDeleted: false},
      relations: ['comments' , 'likes']
    });

    if (!post) {
      throw new SystemError('No such post found', 404);
    }

    post.comments = post.comments.filter( comment => comment.isDeleted === false);
    post.likes =  post.likes.filter( like => like.isLiked === true);

    return post;
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
