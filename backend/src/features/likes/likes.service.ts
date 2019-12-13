import { SystemError } from './../../common/exceptions/system.error';
import { Post } from './../../database/entities/posts.entity';
import { PostLike } from './../../database/entities/posts-likes.entity';
import { User } from './../../database/entities/users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LikesService {
  public constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(PostLike)
    private readonly likesRepository: Repository<PostLike>,
    @InjectRepository(Post) private readonly postsRepository: Repository<Post>,
  ) {}

  public async like(postId: string, userId: string) {
    const post: Post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });
    if (!post) {
      throw new SystemError('Post not found!', 400);
    }

    const user: User = await this.usersRepository.findOne({
      where: { id: userId, isDeleted: false },
    });
    if (!user) {
      throw new SystemError('User not found!', 400);
    }

    const likedAlready: PostLike = await this.likesRepository.findOne({
      where: { user, post },
    });
    if (likedAlready && likedAlready.isLiked) {
      likedAlready.isLiked = false;
      await this.likesRepository.save(likedAlready);

      return { message: 'Post disliked!' };
    } else if (likedAlready && likedAlready.isLiked === false) {
      likedAlready.isLiked = true;
      await this.likesRepository.save(likedAlready);

      return { message: 'Post liked!' };
    }

    const liked = this.likesRepository.create();
    liked.user = user;
    liked.post = post;
    liked.isLiked = true;
    await this.likesRepository.save(liked);

    return { message: 'Post liked!' };
  }

  public async getLikes(postId: string) {
    const post: Post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });
    if (!post) {
      throw new SystemError('Post not found!', 400);
    }

    const likes: PostLike[] = await this.likesRepository.find({
      where: { post }});

    if (likes.length === 0) {
      return { likes: 0 };
    }

    const likesToReturn = likes.reduce(
      (acc, like) => {
        if (like.isLiked === true && like.user.isDeleted === false) {
          acc.likes++;
        }
        return acc;
      },
      { likes: 0 },
    );
    return likesToReturn;
  }

  public async getAllUsersWhoLiked(postId: string) {
    const post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });
    const likes: PostLike[] = await post.likes;

    const users = likes.reduce(
      (acc, vote) => {
        if (vote.isLiked) {
          acc.liked.push(vote.user);
        }
        return acc;
      },
      { liked: [] },
    );

    const usersLiked = await Promise.all(users.liked);
    const usersLikedIds = usersLiked.reduce((acc, user) => {
      acc.push(user.id);
      return acc;
    }, []);

    return { usersLikedIds };
  }

  public async myLikes(postId: string, userId: string) {
    const post: Post = await this.postsRepository.findOne({
      where: { id: postId, isDeleted: false },
    });
    const user = await this.usersRepository.findOne({
      where: { id: userId, isDeleted: false },
    });
    const like = await this.likesRepository.findOne({
      where: { user, post },
    });
    if (!like) {
      return { isLiked: false };
    }
    return { isLiked: like.isLiked };
  }
}
