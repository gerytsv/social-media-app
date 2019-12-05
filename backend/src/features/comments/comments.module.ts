import { AuthModule } from './../../auth/auth.module';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Post } from '../../database/entities/posts.entity';
import { PostComment } from '../../database/entities/comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostComment, User, Post]), AuthModule],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
