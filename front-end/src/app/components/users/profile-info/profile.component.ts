import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';
import { ShowUserInfoDTO } from '../models/show-user-info.dto';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { NotificatorService } from '../../../core/services/notificator.service';
import { ShowDetailedInfoDTO } from '../models/show-detailed-info.dto';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileInfoComponent implements OnInit {
  private loggedInSubscription: Subscription;
  private userSubscription: Subscription;
  private routeSubscription: Subscription;

  public isOwner = false;
  public loggedIn: boolean;
  public loggedInUser: User;
  public user: ShowDetailedInfoDTO;
  public copyOfUser: ShowDetailedInfoDTO;
  public showEditMenu = false;
  public params: string;
  public followed = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersDataService: UsersDataService,
    private readonly authService: AuthService,
    private readonly notificator: NotificatorService
  ) {}

  public ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(res => {
      this.params = res.username;
      this.usersDataService.getUserByUsername(this.params).subscribe(response => {
        this.user = response;
        this.followed = this.user.followers.some(item => this.user.username !== item.username);
        this.copyOfUser = { ...response };
        this.userSubscription = this.authService.loggedUser$.subscribe(user => {
          if (this.user.username === user.username) {
            this.isOwner = true;
          }
        });
      });
    });

    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe(
      loggedIn => (this.loggedIn = loggedIn)
    );
  }

  public updateProfileView(data: ShowUserInfoDTO) {
    this.user = { ...this.user, ...data };
    this.toggleEditMenu();
  }

  public toggleEditMenu() {
    this.showEditMenu = !this.showEditMenu;
  }

  public followUser() {
    try {
      this.usersDataService
        .followUser(this.user.id)
        .subscribe(res => {
          this.notificator.success(`${this.user.username} has been followed`);
          this.followed = true;
        });
    } catch {
      this.notificator.success(`Something went wrong`);
    }
  }

  public unfollowUser() {
    try {
      this.usersDataService.unfollowUser(this.user.id).subscribe(res => {
        this.notificator.success(`${this.user.username} has been unfollowed`);
        this.followed = false;
      });
    } catch {
      this.notificator.success(`Something went wrong`);
    }
  }
}
