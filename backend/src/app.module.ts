import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './features/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { NotificationModule } from './features/notifications/notifications.module';
import { PhotoStorageModule } from './photo/photo-storage.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    NotificationModule,
    PhotoStorageModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
