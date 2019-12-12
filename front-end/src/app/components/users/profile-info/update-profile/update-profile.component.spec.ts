import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { UpdateProfileComponent } from './update-profile.component';

describe('UpdateProfileComponent', () => {
  let fixture: ComponentFixture<UpdateProfileComponent>;
  let component: UpdateProfileComponent;
  let usersDataService;
  let notificatorService;
  let dialogService;

  beforeEach(async(() => {
    jest.clearAllMocks();

    usersDataService = {
      updateProfilePic() {},
      updateProfileInfo() {},
      cancel() {},
    };

    notificatorService = {
      success() {},
      error() {},
    };
    dialogService = {
      openConfDialog() {},
      afterClosed() {},
    };
  }));
});
