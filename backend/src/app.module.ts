import { PostsModule } from './features/posts/posts.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './features/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { NotificationModule } from './features/notifications/notifications.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UsersModule,
    PostsModule,
    AuthModule,
    NotificationModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
