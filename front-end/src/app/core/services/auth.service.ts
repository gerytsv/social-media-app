import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss';

import { Router } from '@angular/router';
import { StorageService } from './storage.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../common/users/user';
import { UserLoginDTO } from '../../common/users/user-login-dto';
import { UserRegisterDTO } from '../../common/users/user-register-dto';

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
      .post<{ token: string }>(`http://localhost:3000/session/login`, user)
      .pipe(
        tap(({ token }) => {
          try {
            const loggedUser = this.helper.decodeToken(token);
            this.storage.save('token', token);

            this.isLoggedInSubject$.next(true);
            this.loggedUserSubject$.next(loggedUser);
          } catch (error) {
            // error handling on the consumer side
          }
        })
      );
  }

  public logout() {
    this.storage.save('token', '');
    this.isLoggedInSubject$.next(false);
    this.loggedUserSubject$.next(null);
    this.router.navigate(['home']);
  }

  public register(user: UserRegisterDTO) {
    return this.http.post(`http://localhost:3000/api/users`, user);
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
