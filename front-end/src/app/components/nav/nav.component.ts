import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  private loggedInSubscription: Subscription;
  private userSubscription: Subscription;
  public username: string;
  public loggedIn = false;
  constructor(
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.isLoggedIn$.subscribe( res => {
      this.loggedIn = res;
    });
    this.userSubscription = this.authService.loggedUser$.subscribe(user => {
      this.username = user.username;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
