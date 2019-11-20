import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataService } from '../users-data.service';
import { ShowUserInfoDTO } from '../models/show-user-info.dto';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileInfoComponent implements OnInit {
  private loggedInSubscription: Subscription;
  private userSubscription: Subscription;

  public isOwner = false;
  public loggedIn: boolean;
  public loggedInUser: User;
  public user: ShowUserInfoDTO;
  public copyOfUser: ShowUserInfoDTO;
  public showEditMenu = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersDataService: UsersDataService,
    private readonly authService: AuthService
  ) {}

  public ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    const userId: string = this.activatedRoute.snapshot.params['id'];
    this.usersDataService.getUserById(userId).subscribe(res => {
      this.user = res;
      this.copyOfUser = { ...res };
      this.userSubscription = this.authService.loggedUser$.subscribe(user => {
        if (this.user.username === user.username) {
          this.isOwner = true;
        }
      });
    });

    this.loggedInSubscription = this.authService.isLoggedIn$.subscribe(
      loggedIn => (this.loggedIn = loggedIn)
    );
  }

  public updateProfileView(data: ShowUserInfoDTO) {
    this.user = data;
    this.toggleEditMenu();
  }

  public toggleEditMenu() {
    this.showEditMenu = !this.showEditMenu;
  }
}
