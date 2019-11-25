import { User } from './../../database/entities/users.entity';
import { ShowUserOnPost } from './../users/models/show-user-on-post.dto';
import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  HttpStatus,
  HttpCode,
  Request,
  Param,
  ValidationPipe,
  Body,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { ShowPostDTO } from './models/show-post.dto';
import { SystemError } from '../../common/exceptions/system.error';
import { CreatePostDTO } from './models/create-post.dto';

@Controller('posts')
export class PostsController {
  public constructor(private readonly postsService: PostsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  @HttpCode(HttpStatus.OK)
  public async allPosts(@Request() request: any) {
    const posts = await this.postsService.allPosts();
    return posts;
  }

  @Get('feed')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  @HttpCode(HttpStatus.OK)
  public async allPostsByFollowed(@Request() request: any) {
    const posts = await this.postsService.allPostsByFollowed(
      request.user.username,
    );
    return posts;
  }

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  @HttpCode(HttpStatus.OK)
  public async postById(@Param('id') postId: string) {
    if (postId) {
      return await this.postsService.findPostById(postId);
    } else {
      throw new SystemError('Wrong post id!', 400);
    }
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  @HttpCode(HttpStatus.CREATED)
  public async addNewPost(
    @Request() request: any,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreatePostDTO,
  ) {
    return await this.postsService.createPost(request.user.id, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  public async delete(@Request() request: any, @Param('id') id: string) {
    return await this.postsService.deletePost(request.user.id, id);
  }
}
