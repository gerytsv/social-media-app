import { Module } from '@nestjs/common';
import { FollowingsService } from './followings.service';
import { FollowingsController } from './followings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [FollowingsService],
    controllers: [FollowingsController],
})
export class FollowingsModule {}
