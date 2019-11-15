import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationService } from './notifications.service';
import { Notification } from '../../database/entities/notifications.entity';
import { NotificationController } from './notifications.controller';
import { User } from '../../database/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notification, User])],
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
