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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../../transformer/interceptors/transform.interceptor';
import { AdminGuard } from '../../common/guards/admin.guard';
import { ShowUserDTO } from './models/show-user.dto';
import { CreateUserDTO } from './models/create-user.dto';

@Controller('api/users')
export class UsersController {
  public constructor(private readonly userService: UsersService) {}

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
}
