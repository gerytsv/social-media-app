import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Huggo';

  private loggedInSubscription: Subscription;
  public loggedIn = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe(res => {
      this.loggedIn = res;
    });
  }

  navigateToHomepage() {
    this.router.navigate(['homepage']);
  }

  navigateToExplore() {
    this.router.navigate(['explore/posts']);
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }
}
