import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersDataService } from '../../users-data.service';
import { NotificatorService } from '../../../../core/services/notificator.service';
import { ShowUserInfoDTO } from '../../models/show-user-info.dto';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  @Input() public user: ShowUserInfoDTO;
  @Output() public updatedUser: EventEmitter<ShowUserInfoDTO> = new EventEmitter();

  constructor(
    private readonly usersDataService: UsersDataService,
    private readonly notificator: NotificatorService,
  ) {}

  public ngOnInit() {
  }

  public updateProfilePic(data: any) {
    this.notificator.warn('Proceeding...');
    this.usersDataService
      .updateProfilePic(data)
      .subscribe(res => {
        try {
        this.user.avatarUrl = res.photoLink;
        this.notificator.success('Photo uploaded, save changes to update profile');
        } catch {
        this.notificator.error('Photo was not uploaded');
        }
      });
  }

  public updateProfileInfo() {
    this.usersDataService.updateProfileInfo(this.user).subscribe(
      res => {   this.user = {...this.user, ...res};
      },
      error => {
        this.notificator.error('Something whent wrong');
      },
      () => {
        this.notificator.success('Profile updated');
      }
    );
  }

  public emitUpdatedProfileInfo() {
    this.updatedUser.emit(this.user);
  }

}
