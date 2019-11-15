import { config } from '../../common/auth.config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { User } from '../../database/entities/users.entity';
import { JwtPayload } from '../../common/types/jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
      ignoreExpiration: false,
    });
  }

  public async validate(payload: JwtPayload): Promise<User> {
    const user = await this.authService.validateUser({
      username: payload.username,
    });
    if (!user) {
      throw new UnauthorizedException(); // Error("Not authorized!");
    }

    return user;
  }
}
