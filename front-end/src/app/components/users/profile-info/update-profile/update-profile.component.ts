import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersDataService } from '../../users-data.service';
import { NotificatorService } from '../../../../core/services/notificator.service';
import { ShowUserInfoDTO } from '../../models/show-user-info.dto';
import { ConformationDialogBoxComponent } from '../../../../shared/conformation-dialog-box/conformation-dialog-box.component';
import { DialogService } from '../../../../core/services/dialog.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  @Input() public user: ShowUserInfoDTO;
  @Output() public updatedUser: EventEmitter<
    ShowUserInfoDTO
  > = new EventEmitter();
  @Output() public cancelUpdate: EventEmitter<null> = new EventEmitter();

  constructor(
    private readonly usersDataService: UsersDataService,
    private readonly notificator: NotificatorService,
    private readonly dialog: DialogService,
  ) {}

  public ngOnInit() {}

  public updateProfilePic(data: any) {
    this.usersDataService.updateProfilePic(data).subscribe(
      res => {
        this.user.avatarUrl = res.photoLink;
        this.notificator.success(
          'Photo uploaded, save changes to update profile'
        );
      },
      () =>
        this.notificator.error('Photo upload fail, check file format or size.')
    );
  }

  public updateProfileInfo() {
    const confirmData = {
      description: 'Do you want to save changes?',
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
              this.notificator.error('Email is not valid');
            },
            () => {
              this.notificator.success('Profile updated');
            }
          );
      }
    });
  }

  public cancel() {
    this.cancelUpdate.emit(null);
  }
}
