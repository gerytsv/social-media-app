import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { NotificatorService } from '../../../core/services/notificator.service';
import { ShowDetailedInfoDTO } from '../models/show-detailed-info.dto';
import { DialogService } from '../../../core/services/dialog.service';
import { ConformationDialogBoxComponent } from '../../../shared/conformation-dialog-box/conformation-dialog-box.component';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileInfoComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  private routeSubscription: Subscription;

  public isOwner = false;
  public loggedIn: boolean;
  public loggedInUser: User;
  public user: ShowDetailedInfoDTO;
  public copyOfUser: ShowDetailedInfoDTO;
  public showEditMenu = false;
  public followed = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersDataService: UsersDataService,
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService,
    private readonly dialog: DialogService
  ) {}

  public ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(res => {
      this.usersDataService.getUserByUsername(res.username).subscribe(
        response => {
          this.user = response;
          this.copyOfUser = { ...response };
          this.userSubscription = this.authService.loggedUser$.subscribe(
            user => {
              if (user) {
                this.loggedInUser = user;
                this.followed = this.user.followers.some(
                  item => item.username === this.loggedInUser.username
                );
                this.user.username === user.username
                  ? (this.isOwner = true)
                  : (this.isOwner = false);
              }
            }
          );
        },
        () => {
          this.notificator.error(`The user ${res.username} doesn't exist`);
        }
      );
    });
  }

  public ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  public updateProfileView(data: any) {
    this.user = { ...this.user, ...data };
    this.toggleEditMenu();
  }

  public toggleEditMenu() {
    this.showEditMenu = !this.showEditMenu;
  }

  public followUser() {
    this.usersDataService.followUser(this.user.id).subscribe(() => {
      this.followed = true;
      (this.user.followers as any) = [
        ...this.user.followers,
        this.loggedInUser,
      ];
      this.notificator.success(`${this.user.username} has been followed`);
    });
  }

  public unfollowUser() {
    this.usersDataService.unfollowUser(this.user.id).subscribe(() => {
      this.followed = false;
      this.user.followers = this.user.followers.filter(
        follower => follower.id !== this.loggedInUser.id
      );
      this.notificator.success(`${this.user.username} has been unfollowed`);
    });
  }

  public delete() {
    const confirmData = {
      description: 'Do you want to delete this account?',
    };
    const refDialog = this.dialog.openConfDialog(
      ConformationDialogBoxComponent,
      confirmData
    );

    refDialog.afterClosed().subscribe(result => {
      if (result) {
        this.usersDataService.deleteUser(this.user.id).subscribe(res => {
          if (this.isOwner) {
            this.authService.logout();
          }
          this.notificator.success(
            `Account with username ${this.user.username} has been deleted`
          );
        });
      }
    });
  }
}
