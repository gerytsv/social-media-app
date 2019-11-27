import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersDataService } from '../../users-data.service';
import { NotificatorService } from '../../../../core/services/notificator.service';
import { ShowUserInfoDTO } from '../../models/show-user-info.dto';
import { ConformationDialogBoxComponent } from '../../../../shared/conformation-dialog-box/conformation-dialog-box.component';
import { DialogService } from '../../../../core/services/dialog.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  @Input() public user: ShowUserInfoDTO;
  @Output() public updatedUser: EventEmitter<
    ShowUserInfoDTO
  > = new EventEmitter();

  constructor(
    private readonly usersDataService: UsersDataService,
    private readonly notificator: NotificatorService,
    private readonly dialog: DialogService
  ) {}

  public ngOnInit() {}

  public updateProfilePic(data: any) {
    this.notificator.warn('Proceeding...');
    this.usersDataService.updateProfilePic(data).subscribe(res => {
      try {
        this.user.avatarUrl = res.photoLink;
        this.notificator.success(
          'Photo uploaded, save changes to update profile'
        );
      } catch {
        this.notificator.error('Photo was not uploaded');
      }
    });
  }

  public updateProfileInfo() {
    const confirmData = {
      description: 'Do you want to save changes?'
    };
    const refDialog = this.dialog.openConfDialog(
      ConformationDialogBoxComponent,
      confirmData
    );

    refDialog.afterClosed().subscribe(result => {
      if (result) {
        this.usersDataService
          .updateProfileInfo(this.user, this.user.id)
          .subscribe(
            res => {
              this.user = { ...this.user, ...res };
              this.updatedUser.emit(this.user);
            },
            error => {
              this.notificator.error('Could not update profile');
            },
            () => {
              this.notificator.success('Profile updated');
            }
          );
      }
    });
  }

}
