import { Post } from './../../database/entities/posts.entity';
import { PostLike } from './../../database/entities/posts-likes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { AuthModule } from '../../auth/auth.module';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User, PostLike, Post]), AuthModule],
  providers: [LikesService],
  controllers: [LikesController],
})
export class LikesModule {}
