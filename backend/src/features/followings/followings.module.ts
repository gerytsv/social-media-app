import { Module } from '@nestjs/common';
import { FollowingsService } from './followings.service';
import { FollowingsController } from './followings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { History } from '../../database/entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, History])],
  providers: [FollowingsService],
  controllers: [FollowingsController],
})
export class FollowingsModule {}
