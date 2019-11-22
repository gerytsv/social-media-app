import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  UseGuards,
  ValidationPipe,
  UseInterceptors,
  Delete,
  Put,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { AdminGuard } from '../../common/guards/admin.guard';
import { ShowUserDTO } from './models/show-user.dto';
import { CreateUserDTO } from './models/create-user.dto';
import { ShowUserInfoDTO } from './models/show-user-info.dto';
import { UpdateInfoDTO } from './models/update-Info.dto';
import { ShowDetailedInfoDTO } from './models/show-detailed-info.dto';

@Controller('api/users')
export class UsersController {
  public constructor(private readonly userService: UsersService) {}

  @Get(':username')
  @UseInterceptors(new TransformInterceptor(ShowDetailedInfoDTO))
  public async getUserByUsername(@Param('username') username: string) {
    return await this.userService.getUserInfo(username);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowUserDTO))
  public async getAll() {
    return await this.userService.allUsers();
  }

  @Post()
  @UseInterceptors(new TransformInterceptor(ShowUserDTO))
  public async register(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: CreateUserDTO,
  ) {
    return await this.userService.createUser(body);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'))
  public async deleteUser(@Param('id') userId: string) {
    return await this.userService.delete(userId);
  }

  @Put('account')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(new TransformInterceptor(ShowUserInfoDTO))
  public async updateInfo(
    @Request() req: any,
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    body: UpdateInfoDTO,
  ) {
    return await this.userService.updateUserInfo(
      req.user.id,
      body.name,
      body.country,
      body.description,
      body.avatarUrl,
    );
  }
}
