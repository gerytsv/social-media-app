// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { async, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { CommentsDataService } from './comments-data.service';
// import { disconnect } from 'cluster';
// describe('CommentsService', () => {
//   let httpClient;

//   let service: CommentsDataService;

//   beforeEach(async(() => {
//     jest.clearAllMocks();

//     httpClient = {
//       get() {},
//       post() {},
//       put() {},
//       delete() {},
//     };

//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       providers: [CommentsDataService],
//     }).overrideProvider(HttpClient, { useValue: httpClient });

//     service = TestBed.get(CommentsDataService);
//   }));

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('createComment method should call http.post with the correct parameters', done => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/1/comments';
//     const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

//     // Act
//     service.createComment('1', { content: '123' }).subscribe( () => {

//     // Assert
//     expect(httpClient.post).toHaveBeenCalledTimes(1);
//     expect(httpClient.post).toHaveBeenLastCalledWith(url, { content: '123' });

//     done();
//     });

//   });

//   it('getCommentsOfPost method should call http.get with the correct parameters', done => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/1/comments';
//     const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

//     // Act
//     service.getCommentsOfPost('1').subscribe( () => {

//     // Assert
//     expect(httpClient.get).toHaveBeenCalledTimes(1);
//     expect(httpClient.get).toHaveBeenLastCalledWith(url);

//     done();
//     });

//   });

//   it('getCommentsOfPost method should return the correct value', () => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/1/comments';
//     const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

//     // Act
//     const act = service.getCommentsOfPost('1');

//     // Assert
//     expect(act).toEqual(returnValue);
//   });

//   it('deleteComment method should call http.delete with the correct parameters', done => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/comments/1';
//     const spy = jest.spyOn(httpClient, 'delete').mockReturnValue(returnValue);

//     // Act
//     service.deleteComment('1').subscribe( () => {

//     // Assert
//     expect(httpClient.delete).toHaveBeenCalledTimes(1);
//     expect(httpClient.delete).toHaveBeenLastCalledWith(url);

//     done();
//     });

//   });

//   it('deleteComment method should return the correct value', () => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/comments/1';
//     const spy = jest.spyOn(httpClient, 'delete').mockReturnValue(returnValue);

//     // Act
//     const act = service.deleteComment('1');

//     // Assert
//     expect(act).toEqual(returnValue);
//   });

//   it('updateComment method should call http.put with the correct parameters', done => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/comments/1';
//     const spy = jest.spyOn(httpClient, 'put').mockReturnValue(returnValue);

//     // Act
//     service.updateCommentContent('1', { content: '123' }).subscribe( () => {
//       // Assert
//     expect(httpClient.put).toHaveBeenCalledTimes(1);
//     expect(httpClient.put).toHaveBeenLastCalledWith(url, { content: '123' });

//     done();
//     });

//   });

//   it('updateComment method should return the correct value', () => {
//     // Arrange
//     const returnValue = of('return value');
//     const url = 'http://localhost:3000/posts/comments/1';
//     const spy = jest.spyOn(httpClient, 'put').mockReturnValue(returnValue);

//     // Act
//     const act = service.updateCommentContent('1', { content: '123' });

//     // Assert
//     expect(act).toEqual(returnValue);
//   });
// });
