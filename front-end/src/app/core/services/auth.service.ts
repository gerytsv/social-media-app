import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../components/users/models/user';
import { UserLoginDTO } from '../../components/users/models/user-login-dto';
import { UserRegisterDTO } from '../../components/users/models/user-register-dto';
import { CONFIG } from '../../config/config';
import Swal from 'sweetalert2';

@Injectable()
export class AuthService {
  private readonly isLoggedInSubject$ = new BehaviorSubject<boolean>(
    this.isUserLoggedIn()
  );
  private readonly loggedUserSubject$ = new BehaviorSubject<User>(
    this.loggedUser()
  );

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService,
    private readonly router: Router,
    private readonly helper: JwtHelperService
  ) {}

  public get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject$.asObservable();
  }

  public get loggedUser$(): Observable<User> {
    return this.loggedUserSubject$.asObservable();
  }

  public login(user: UserLoginDTO) {
    return this.http
      .post<{ token: string }>(`${CONFIG.DOMAIN_NAME}/session/login`, user)
      .pipe(
        tap(({ token }) => {
          try {
            const loggedUser = this.helper.decodeToken(token);
            this.storage.save('token', token);

            this.isLoggedInSubject$.next(true);
            this.loggedUserSubject$.next(loggedUser);
          } catch (error) {}
        })
      );
  }

  public logout() {
    this.storage.save('token', '');
    this.isLoggedInSubject$.next(false);
    this.loggedUserSubject$.next(null);
    Swal.fire({
      title: 'Logout successful!',
      text: 'See you soon! ^^',
      type: 'success',
      background: '#fff',
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['homepage']);
  }

  public register(user: UserRegisterDTO) {
    return this.http.post(`${CONFIG.DOMAIN_NAME}/users`, user);
  }

  private isUserLoggedIn(): boolean {
    return !!this.storage.read('token');
  }

  private loggedUser(): User {
    try {
      return this.helper.decodeToken(this.storage.read('token'));
    } catch (error) {
      // in case of storage tampering
      this.isLoggedInSubject$.next(false);

      return null;
    }
  }
}
