import { NotificatorService } from '../../core/services/notificator.service';
import { AuthService } from '../../core/services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../components/users/models/user';
import { tap } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService,
    private readonly router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    let admin;
    this.authService.loggedUser$.pipe(
      tap(res => {
        if (res) {
          admin = res.isAdmin;
          if (!admin) {
            this.router.navigate(['homepage']);
            this.notificator.error(`Forbidden page!`);
          }
        }
      })
    );
    return admin;
  }
}
