import { Controller, Post, UseGuards, UseInterceptors, Request, Param, Delete, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FollowingsService } from './followings.service';
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { ShowUserDTO } from '../users/models/show-user.dto';
import { ShowDetailedInfoDTO } from '../users/models/show-detailed-info.dto';

@Controller('api/follow/users')
export class FollowingsController {
  public constructor(private readonly followingsService: FollowingsService) {}

  @Post(':id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowDetailedInfoDTO))
  public async followeUser(@Request() req: any, @Param('id') userId: string) {
    return await this.followingsService.followUser(req.user.id, userId);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowDetailedInfoDTO))
  public async unFolloweUser(@Request() req: any, @Param('id') userId: string) {
    return await this.followingsService.unFollowUser(req.user.id, userId);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowDetailedInfoDTO))
  public async getUserFollowings(@Request() req: any) {
    return await this.followingsService.getUserFollowings(req.user.id);
  }
}
