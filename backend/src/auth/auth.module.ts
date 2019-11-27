import { ConfigModule } from './../config/config.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { config } from '../common/auth.config';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Role } from '../database/entities/roles.entity';
import { User } from '../database/entities/users.entity';
import { History } from '../database/entities/history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../features/users/users.service';
import { Post } from '../database/entities/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, History]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: config.jwtSecret,
        signOptions: {
          expiresIn: config.expiresIn,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersService],
  exports: [AuthService, PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AuthModule {}
