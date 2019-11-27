import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  public loggedInSubscription: Subscription;
  public showLogin = true;
  public showRegister = false;
  public button = 'Login';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe(res => {
      if (res === true) {
        this.router.navigate(['home']);
      }
    });
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

  toggleLogin() {
    this.showLogin = true;
    this.showRegister = false;
  }
  toggleRegister() {
    this.showLogin = false;
    this.showRegister = true;
  }

}
