import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { UserLoginDTO } from '../features/users/models/login-user.dto';

@Controller('session')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  public async login(
    @Body(new ValidationPipe({ transform: true, whitelist: true }))
    user: UserLoginDTO,
  ): Promise<{ token: string }> {
    const token = await this.authService.signIn(user);
    if (!token) {
      throw new BadRequestException(`Invalid email and/or password!`);
    }

    return { token };
  }
}
