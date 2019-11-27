import { JwtPayload } from './../common/types/jwt-payload';
import { Injectable } from '@nestjs/common';
import { User } from '../database/entities/users.entity';
import { JwtService } from '@nestjs/jwt';
import { SystemError } from '../common/exceptions/system.error';
import { UserLoginDTO } from '../features/users/models/login-user.dto';
import { UsersService } from '../features/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  public async signIn(user: UserLoginDTO) {
    const userFound = await this.usersService.signIn(user);
    if (userFound && !userFound.isDeleted) {
      let isAdmin = false;
      userFound.roles.map(item => {
        if (item.name === 'Admin') {
          isAdmin = true;
        }})
      // Returning the token
      return await this.jwtService.signAsync({
        isAdmin,
        username: userFound.username,
        email: userFound.email,
        avatarUrl: userFound.avatarUrl
      } as JwtPayload);
    }
    if (!userFound) {
      throw new SystemError('No such user exists!', 400);
    }
  }

  // For the strategy
  public async validateUser(payload: JwtPayload): Promise<User> {
    return await this.usersService.validate(payload);
  }
}
