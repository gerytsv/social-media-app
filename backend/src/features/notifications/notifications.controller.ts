import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { NotificationService } from './notifications.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/user')
export class NotificationController {
  public constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Get('notifications')
  @UseGuards(AuthGuard('jwt'))
  public async getAll(@Request() request: any) {
    return await this.notificationService.getAllNotifications(request.user.id);
  }
}
