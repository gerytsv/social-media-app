import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { DialogService } from '../../core/services/dialog.service';
import { ConformationDialogBoxComponent } from '../../shared/conformation-dialog-box/conformation-dialog-box.component';

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
  public isAdmin = false;
  public showAdminMenu = false;
  constructor(
    private readonly authService: AuthService,
    private readonly dialog: DialogService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.loggedUser$.subscribe(user => {
      this.isAdmin = user.isAdmin;
      this.username = user.username;
    });
    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe( res => {
      this.loggedIn = res;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.loggedInSubscription.unsubscribe();
  }

  public get profileLink() {
    return ['/users', this.username];
  }

  public toggleAdminDropdown() {
    this.showAdminMenu = !this.showAdminMenu;
  }

  public logout() {
    const confirmData = {
      description: 'Do you want to logout?',
    };
    const refDialog = this.dialog.openConfDialog(ConformationDialogBoxComponent, confirmData);

    refDialog.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout();
      }
    });
  }
}
