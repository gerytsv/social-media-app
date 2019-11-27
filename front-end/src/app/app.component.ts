import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'front-end';

  private loggedInSubscription: Subscription;
  public loggedIn = false;

  constructor(
    private readonly authService: AuthService,
  ) {}

  ngOnInit() {
    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe( res => {
      this.loggedIn = res;
    });
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }
}
