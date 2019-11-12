import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserRole } from '../enums/user-roles.enum';
import { Role } from '../../database/entities/roles.entity';

@Injectable()
export class AdminGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return user && user.roles.some((role: Role) => role.name === UserRole.Admin);
  }
}
