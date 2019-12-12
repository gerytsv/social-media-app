import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProfileInfoComponent } from './profile.component';
import { UsersDataService } from '../users-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NotificatorService } from '../../../core/services/notificator.service';
import { DialogService } from '../../../core/services/dialog.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { FollowsComponent } from './follows/follows.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { of, throwError } from 'rxjs';
import { UserPostsComponent } from '../../user-posts/user-posts.component';
import { PostsModule } from '../../../post/posts.module';

describe('ProfileComponent', () => {
  let fixture: ComponentFixture<ProfileInfoComponent>;
  let component: ProfileInfoComponent;
  let usersDataService;
  let activatedRoute;
  let authService;
  let notificatorService;
  let dialogService;

  beforeEach(async(() => {
    jest.clearAllMocks();

    usersDataService = {
      getUserByUsername() { },
      followUser() { },
      unfollowUser() { }
    };
    authService = {
      get loggedUser$() {
        return of();
      }
    };
    activatedRoute = {
      params: of({
        username: 'pesho'
      })
    };
    notificatorService = {
      success() { },
      error() { }
    };
    dialogService = {
      openConfDialog() {},
      afterClosed() {}
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, SharedModule, PostsModule],
      providers: [
        UsersDataService,
        AuthService,
        NotificatorService,
        DialogService
      ],
      declarations: [
        ProfileInfoComponent,
        UpdateProfileComponent,
        FollowsComponent,
        UserPostsComponent
      ]
    })
      .overrideProvider(UsersDataService, { useValue: usersDataService })
      .overrideProvider(ActivatedRoute, { useValue: activatedRoute })
      .overrideProvider(AuthService, { useValue: authService })
      .overrideProvider(NotificatorService, { useValue: notificatorService })
      .overrideProvider(DialogService, { useValue: dialogService })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ProfileInfoComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should be defined', () => {
    fixture = TestBed.createComponent(ProfileInfoComponent);
    component = fixture.debugElement.componentInstance;
  });

  describe('OnOnit()', () => {
    it('should subscribe to activated route params, then subscribe to getUserbyUsername and save the data as user', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      // Act
      component.ngOnInit();

      // Assert
      expect(component.user).toEqual(mockedUserData);
    });

    it('should subscribe to authService.loggedInUser$ and save the data as loggedInUser', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      // Act
      component.ngOnInit();

      // Assert
      expect(component.loggedInUser).toEqual(mockedUserData);
    });

    it('if the logged in user has followed this user this.followed must be true', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: [{ username: 'gosho' }]
      };
      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      // Act
      component.ngOnInit();

      // Assert
      expect(component.followed).toEqual(true);
    });

    it('if the logged in user has not followed this user this.followed must be false', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      // Act
      component.ngOnInit();

      // Assert
      expect(component.followed).toEqual(false);
    });

    it('if the logged in user is the same as the current profile user isOwner must be true', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      // Act
      component.ngOnInit();

      // Assert
      expect(component.isOwner).toEqual(true);
    });

    it('if the logged in user is not the same as the current profile user isOwner must be false', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedLoggedInUserData));
      // Act
      component.ngOnInit();

      // Assert
      expect(component.isOwner).toEqual(false);
    });

    it('if the back end server fails to find user it should throw an error with the correct messege', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(throwError('error'));
      const spy4 = jest.spyOn(notificatorService, 'error');
      // Act
      component.ngOnInit();
      let username;
      activatedRoute.params.subscribe(res => (username = res.username));

      // Assert
      expect(notificatorService.error).toHaveBeenCalledWith(
        `The user ${username} doesn't exist`
      );
      expect(notificatorService.error).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateProfileView()', () => {
    it('should change the old properties of the user with the new ones', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const updatedMockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '123@abv.bg',
        followers: []
      };

      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));

      // Act
      component.ngOnInit();
      component.updateProfileView({ email: '123@abv.bg' });
      // Assert
      expect(component.user).toEqual(updatedMockedUserData);
    });

    it('should call toggleEditMenu()', () => {
      // Arrange
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const updatedMockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '123@abv.bg',
        followers: []
      };

      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy4 = jest.spyOn(component, 'toggleEditMenu');

      // Act
      component.ngOnInit();
      component.updateProfileView({ email: '123@abv.bg' });
      // Assert
      expect(component.toggleEditMenu).toHaveBeenCalledTimes(1);
    });
  });

  describe('toggleEditMenu()', () => {
    it('should change the showEditMenu boolean to the opposite', () => {

      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy4 = jest.spyOn(component, 'toggleEditMenu');

      component.showEditMenu = true;
      // Act
      component.ngOnInit();
      component.toggleEditMenu();

      // Assert
      expect(component.showEditMenu).toBe(false);
    });
  });

  describe('followUser()', () => {
    it('should subscribe to usersDataService followedUser() and change this.followed to true', () => {
      // Arrage
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy2 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'followUser')
        .mockReturnValue(of('any'));
      component.followed = false;

      // Act
      component.ngOnInit();
      component.followUser();

      // Assert
      expect(component.followed).toBe(true);
    });

    it('should subscribe to usersDataService followedUser() and update user.followers array', () => {
      // Arrage
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy2 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'followUser')
        .mockReturnValue(of('any'));

      // Act
      component.ngOnInit();
      component.user.followers = [];
      component.followUser();
      // Assert
      expect(component.user.followers).toContain(mockedLoggedInUserData);
    });

    it('should subscribe to usersDataService followedUser() and call notificator.succes with the correct arguments', () => {
      // Arrage
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy2 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'followUser')
        .mockReturnValue(of('any'));
      const spy4 = jest
        .spyOn(notificatorService, 'success');

      // Act
      component.ngOnInit();
      component.user.followers = [];
      component.followUser();
      // Assert
      expect(notificatorService.success).toHaveBeenCalledWith(`${component.user.username} has been followed`);
    });
  });

  describe('unFollowUser()', () => {
    it('should subscribe to userDataService.unfollowedUser and change this.followed to false', () => {
      // Arrange
      // Arrage
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy2 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'unfollowUser')
        .mockReturnValue(of('any'));

      // Act
      component.ngOnInit();
      component.followed = true;
      component.unfollowUser();
      // Assert
      expect(component.followed).toBe(false);
    });

    it('should subscribe to userDataService.unfollowedUser and filter the loggedInUser', () => {
      // Arrange
      // Arrage
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy2 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'unfollowUser')
        .mockReturnValue(of('any'));

      // Act
      component.ngOnInit();
      (component.user.followers as any) = [mockedLoggedInUserData];
      component.unfollowUser();
      // Assert
      expect(component.user.followers).toEqual([]);
    });

    it('should subscribe to userDataService.unfollowedUser and call notificatorService.success with the correct arguments', () => {
      // Arrange
      // Arrage
      const mockedUserData = {
        id: '1',
        username: 'pesho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };

      const mockedLoggedInUserData = {
        id: '1',
        username: 'gosho',
        avatarUrl: 'url',
        isAdmin: true,
        email: '1@abv.bg',
        followers: []
      };
      const spy = jest
        .spyOn(authService, 'loggedUser$', 'get')
        .mockReturnValue(of(mockedLoggedInUserData));
      const spy2 = jest
        .spyOn(usersDataService, 'getUserByUsername')
        .mockReturnValue(of(mockedUserData));
      const spy3 = jest
        .spyOn(usersDataService, 'unfollowUser')
        .mockReturnValue(of('any'));
      const spy4 = jest
        .spyOn(notificatorService, 'success');


      // Act
      component.ngOnInit();
      (component.user.followers as any) = [mockedLoggedInUserData];
      component.unfollowUser();
      // Assert
      expect(notificatorService.success).toHaveBeenCalledWith(`${component.user.username} has been unfollowed`);
    });
  });
});
