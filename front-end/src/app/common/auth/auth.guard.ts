import { NotificatorService } from '../../core/services/notificator.service';
import { AuthService } from '../../core/services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService,
    private readonly router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn$.pipe(
      tap((loggedIn) => {
        if (!loggedIn) {
          this.notificator.error(`You not authorized to access this page!`);
          this.router.navigate(['homepage']);
        }
      })
    );
  }
}
