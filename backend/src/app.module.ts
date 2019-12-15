import { LikesModule } from './features/likes/likes.module';
import { PostsModule } from './features/posts/posts.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './features/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { PhotoStorageModule } from './photo/photo-storage.module';
import { FollowingsModule } from './features/followings/followings.module';
import { AdminHistoryModule } from './features/admin-history/admin-history.module';
import { CommentsModule } from './features/comments/comments.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UsersModule,
    PostsModule,
    AuthModule,
    PhotoStorageModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    FollowingsModule,
    AdminHistoryModule,
    CommentsModule,
    LikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
