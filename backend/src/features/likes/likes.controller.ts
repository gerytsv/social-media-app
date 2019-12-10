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

  @Get('/posts/:postId/likes')
  @UseGuards(AuthGuard())
  public async likes(@Param('postId') postId: string, @Request() request: any) {
    return await this.likesService.like(request.user.id, postId);
  }
}
