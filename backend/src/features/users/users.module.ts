import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Role } from '../../database/entities/roles.entity';
import { History } from '../../database/entities/history.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, History])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
