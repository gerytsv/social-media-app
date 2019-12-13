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
  Put,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { ShowPostDTO } from './models/show-post.dto';
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

  @Post('create')
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

  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  @HttpCode(HttpStatus.OK)
  public async postById(@Param('id') postId: string) {
      return await this.postsService.findPostById(postId);

  }

  @Put(':id')
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  public async editPost(
    @Request() request: any,
    @Param('id') postId: string,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreatePostDTO,
  ) {
    return await this.postsService.editPost(
      request.user.id,
      postId,
      body.description,
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostDTO))
  public async delete(@Request() request: any, @Param('id') id: string) {
    return await this.postsService.deletePost(request.user.id, id);
  }
}
