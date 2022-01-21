// import { ImageCropperModule } from './image-cropper/image-cropper.module';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CreatePostComponent } from './create-post.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';
// import { SharedModule } from '../../shared/shared.module';
// import { PostsDataService } from '../services/posts-data.service';
// import { NotificatorService } from '../../core/services/notificator.service';
// import { UploadImagePostComponent } from './upload-image-post/upload-image-post.component';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs';

// describe('CreatePostComponent', () => {
//   let component: CreatePostComponent;
//   let fixture: ComponentFixture<CreatePostComponent>;
//   let postsDataService;
//   let router;
//   let notificatorService;

//   beforeEach(async(() => {
//     jest.clearAllMocks();

//     postsDataService = {
//       uploadPhoto() {},
//       createPost() {},
//     };
//     router = {
//       navigate() {},
//     };
//     notificatorService = {
//       warn() {},
//       success() {},
//       error() {},
//     };

//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         FormsModule,
//         SharedModule,
//         ImageCropperModule,
//       ],
//       providers: [PostsDataService, NotificatorService],
//       declarations: [CreatePostComponent, UploadImagePostComponent],
//     })
//       .overrideProvider(PostsDataService, { useValue: postsDataService })
//       .overrideProvider(Router, {
//         useValue: router,
//       })
//       .overrideProvider(NotificatorService, { useValue: notificatorService })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(CreatePostComponent);
//         component = fixture.componentInstance;
//       });
//   }));

//   it('should be defined', done => {
//     fixture = TestBed.createComponent(CreatePostComponent);
//     component = fixture.debugElement.componentInstance;
//     expect(fixture).toBeDefined();
//     done();
//   });

//   describe('imageCropped()', () => {
//     it('should set this.', done => {
//       // Arrange
//       const base64 = '1,2,3';
//       // Act
//       component.imageCropped(base64);
//       // Assert
//       expect(component.imgUrl).toBe('2');
//       done();
//     });
//   });
//   describe('onPostButtonClick()', () => {
//     it('should call this.notificator.warn with the correct arguments', done => {
//       // Arrange
//       const mockedPostData = {
//         photoLink: '12345',
//       };
//       const spy = jest
//         .spyOn(postsDataService, 'uploadPhoto')
//         .mockReturnValue(of(mockedPostData));
//       const spy2 = jest
//         .spyOn(postsDataService, 'createPost')
//         .mockReturnValue(of({}));
//       const spy3 = jest.spyOn(notificatorService, 'warn');
//       const spy4 = jest.spyOn(notificatorService, 'success');
//       // Act
//       component.onPostButtonClick();
//       // Assert
//       expect(notificatorService.warn).toBeCalledTimes(1);
//       expect(notificatorService.warn).toHaveBeenCalledWith(
//         'Uploading new post...'
//       );
//       done();
//     });

//     it('should subscribe to this.postsDataService.createPost and invoke this.notificator.success()', done => {
//       // Arrange
//       const mockedPostData = {
//         photoLink: '12345',
//       };
//       const spy = jest
//         .spyOn(postsDataService, 'uploadPhoto')
//         .mockReturnValue(of(mockedPostData));
//       const spy2 = jest
//         .spyOn(postsDataService, 'createPost')
//         .mockReturnValue(of({}));
//       const spy3 = jest.spyOn(notificatorService, 'warn');
//       const spy4 = jest.spyOn(notificatorService, 'success');
//       // Act
//       component.onPostButtonClick();
//       // Assert
//       expect(notificatorService.success).toBeCalledTimes(1);
//       expect(notificatorService.success).toHaveBeenCalledWith(
//         'Post uploaded succesfully'
//       );
//       done();
//     });
//     it('should subscribe to this.postsDataService.createPost and call this.router.navigate on success', done => {
//       // Arrange
//       const mockedPostData = {
//         photoLink: '12345',
//       };
//       const spy = jest
//         .spyOn(postsDataService, 'uploadPhoto')
//         .mockReturnValue(of(mockedPostData));
//       const spy2 = jest
//         .spyOn(postsDataService, 'createPost')
//         .mockReturnValue(of({}));
//       const spy3 = jest.spyOn(notificatorService, 'warn');
//       const spy4 = jest.spyOn(notificatorService, 'success');
//       const spy5 = jest.spyOn(router, 'navigate');
//       // Act
//       component.onPostButtonClick();
//       // Assert
//       expect(router.navigate).toBeCalledTimes(1);
//       expect(router.navigate).toHaveBeenCalledWith(['/home']);
//       done();
//     });
//   });

//   it('should subscribe to this.postsDataService.uploadPhoto and call this.notificatorService.error on failure', done => {
//     // Arrange
//     jest.clearAllMocks();
//     const spy = jest
//       .spyOn(postsDataService, 'uploadPhoto')
//       .mockReturnValue(throwError('error'));
//     const spy2 = jest.spyOn(notificatorService, 'error');
//     // Act
//     component.onPostButtonClick();
//     // Assert
//     expect(notificatorService.error).toBeCalledTimes(1);
//     expect(notificatorService.error).toHaveBeenCalledWith(
//       'Could not upload picture'
//     );
//     done();
//   });

//   describe('isPrivateCheck()', () => {
//     it('should set this.isPrivate to true', done => {
//       // Arrange
//       // Act
//       component.isPrivateCheck();
//       // Assert
//       expect(component.isPrivate).toBe(true);
//       done();
//     });
//   });
//   describe('isPublicCheck()', () => {
//     it('should set this.isPrivate to false', done => {
//       // Arrange
//       // Act
//       component.isPublicCheck();
//       // Assert
//       expect(component.isPrivate).toBe(false);
//       done();
//     });
//   });
// });
