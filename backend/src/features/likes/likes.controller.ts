import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  Request,
  Param,
  Delete,
  Get,
  Body,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LikesService } from './likes.service';

@Controller('api')
export class LikesController {
  public constructor(private readonly likesService: LikesService) {}

  @Post('/posts/:postId/likes')
  @UseGuards(AuthGuard())
  public async likes(@Param('postId') postId: string, @Request() request: any) {
    return await this.likesService.like(postId, request.user.id);
  }

  @Get('/posts/:postId/likes')
  @UseGuards(AuthGuard())
  public async getAllLikes(
    @Param('postId') postId: string,
    @Request() request: any,
  ) {
    return {
      likes: await this.likesService.getLikes(postId),
      myLikes: await this.likesService.myLikes(postId, request.user.id),
    };
  }

  @Get('/posts/:postId/likes/users')
  @UseGuards(AuthGuard())
  public async getAllUsersWhoLiked(@Param('postId') postId: string) {
    return await this.likesService.getAllUsersWhoLiked(postId);
  }
}
