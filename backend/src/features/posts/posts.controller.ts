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
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { ShowPostDTO } from './models/show-post.dto';
import { CreatePostDTO } from './models/create-post.dto';
import { ShowPostInfoDTO } from './models/show-post-info-only.dto';

@Controller('posts')
export class PostsController {
  public constructor(private readonly postsService: PostsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostInfoDTO))
  @HttpCode(HttpStatus.OK)
  public async allPosts(
    @Request() request: any,
    @Query('take') take: number,
    @Query('skip') skip: number,
  ) {
    const posts = await this.postsService.allPosts(take, skip);
    return posts;
  }

  @Get('feed')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowPostInfoDTO))
  @HttpCode(HttpStatus.OK)
  public async allPostsByFollowed(
    @Request() request: any,
    @Query('take') take: number,
    @Query('skip') skip: number,
  ) {
    const posts = await this.postsService.allPostsByFollowed(
      request.user.username,
      take,
      skip,
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
