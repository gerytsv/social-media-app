import { Injectable } from '@nestjs/common';
import { Notification } from '../../database/entities/notifications.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Repository } from 'typeorm';
import { identifier } from '@babel/types';
import { SystemError } from '../../common/exceptions/system.error';

@Injectable()
export class NotificationService {
  public constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  public async getAllNotifications(userId: string) {
    return await this.notificationRepository.find({});
  }

  public async createNotification(
    userId: string,
    message: string,
    followedByUserId?: string,
    postId?: string,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId, isDeleted: false },
    });
    if (!user) {
      throw new SystemError('User doesnt exist', 400);
    }
    const notification = {
      user,
      content: message,
    };

    const createdNotification = this.notificationRepository.create(
      notification,
    );
    if (followedByUserId) {
      createdNotification.followedByUserId = followedByUserId;
    }
    if (postId) {
      createdNotification.postId = postId;
    }

    return await this.notificationRepository.save(createdNotification);
  }
}
