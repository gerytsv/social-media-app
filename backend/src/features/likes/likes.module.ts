import { PostLike } from './../../database/entities/posts-likes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post, Module } from '@nestjs/common';
import { User } from '../../database/entities/users.entity';
import { AuthModule } from '../../auth/auth.module';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Post, User, PostLike]), AuthModule],
  providers: [LikesService],
  controllers: [LikesController],
})
export class LikesModule {}
