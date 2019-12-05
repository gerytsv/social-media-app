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
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { CommentsService } from './comments.service';
import { ShowCommentDTO } from './models/show-comment.dto';
import { AdminGuard } from '../../common/guards/admin.guard';
import { CreateCommentDTO } from './models/create-comment.dto';

@Controller('api')
export class CommentsController {
  public constructor(private readonly commentsService: CommentsService) {}

  @Get('/posts/:postId/comments')
  @UseInterceptors(new TransformInterceptor(ShowCommentDTO))
  @UseGuards(AuthGuard())
  public async readAllPostComments(@Param('postId') postId: string) {
    return await this.commentsService.getAllPostComments(postId);
  }

  @Get('/users/:userId/comments')
  @UseInterceptors(new TransformInterceptor(ShowCommentDTO))
  @UseGuards(AuthGuard(), AdminGuard)
  public async readAllUserComments(@Param('userId') userId: string) {
    return await this.commentsService.getAllUserComments(userId);
  }

  @Post('/posts/:postId/comments')
  @UseInterceptors(new TransformInterceptor(ShowCommentDTO))
  @UseGuards(AuthGuard())
  public async createPostComment(
    @Request() request: any,
    @Param('postId') postId: string,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreateCommentDTO,
  ) {
    return await this.commentsService.createComment(
      request.user.id,
      postId,
      body.content,
    );
  }

  //   @Put('/posts/comments/:commentId')
  //   @UseInterceptors(new TransformInterceptor(ShowCommentDTO))
  //   @UseGuards(AuthGuard())
  //   public async editPostComment(
  //     @Request() request: any,
  //     @Param('commentId') commentId: string,
  //     @Body(new ValidationPipe({ transform: true, whitelist: true }))
  //     body: CreateCommentDTO,
  //   ) {
  //     return await this.commentsService.editContent(
  //       request.user.id,
  //       commentId,
  //       body.content,
  //     );
  //   }

  @Get('user/posts/commented')
  @UseGuards(AuthGuard())
  public async getUserAllReviewedBooks(@Request() request: any) {
    return await this.commentsService.getCommentedPosts(request.user.id);
  }

  @Delete('/posts/comments/:commentId')
  @UseGuards(AuthGuard())
  public async deleteComment(
    @Request() request: any,
    @Param('commentId') commentId: string,
  ) {
    return await this.commentsService.removeComment(request.user.id, commentId);
  }
}
