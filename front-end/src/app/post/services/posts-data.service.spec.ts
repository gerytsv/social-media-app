import { PostsDataService } from './posts-data.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
describe('PostsService', () => {
  let httpClient;

  let service: PostsDataService;

  beforeEach(async(() => {
    jest.clearAllMocks();

    httpClient = {
      get() {},
      post() {},
      put() {},
      delete() {},
    };

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PostsDataService],
    }).overrideProvider(HttpClient, { useValue: httpClient });

    service = TestBed.get(PostsDataService);
  }));

  it('should be defined', () => {
    // Arrange & Act & Assert
    expect(service).toBeDefined();
  });

  describe('allPosts()', () => {
    it('should call the httpClient.get() method once with correct parameters', done => {
      // Arrange
      const take = 10;
      const skip = 10;
      const url = `http://localhost:3000/posts?take=${take}&skip=${skip}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act & Assert
      service.allPosts(take, skip).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url);

        done();
      });
    });
    it('should return the result from the httpClient.get() method', () => {
      // Arrange
      const take = 10;
      const skip = 10;
      const url = `http://localhost:3000/posts?take=${take}&skip=${skip}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act
      const result = service.allPosts(take, skip);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('followedPosts()', () => {
    it('should call the httpClient.get() method once with correct parameters', done => {
      // Arrange
      const take = 10;
      const skip = 10;
      const url = `http://localhost:3000/posts/feed?take=${take}&skip=${skip}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act & Assert
      service.followedPosts(take, skip).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url);

        done();
      });
    });
    it('should return the result from the httpClient.get() method', () => {
      // Arrange
      const take = 10;
      const skip = 10;
      const url = `http://localhost:3000/posts/feed?take=${take}&skip=${skip}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act
      const result = service.followedPosts(take, skip);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('getPostById()', () => {
    it('should call the httpClient.get() method once with correct parameters', done => {
      // Arrange
      const id = '10';
      const url = `http://localhost:3000/posts/${id}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act & Assert
      service.getPostById(id).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url);

        done();
      });
    });
    it('should return the result from the httpClient.get() method', () => {
      // Arrange
      const id = '10';
      const url = `http://localhost:3000/posts/${id}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act
      const result = service.getPostById(id);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('uploadPhoto()', () => {
    it('should call the httpClient.post() method once with correct parameters', done => {
      // Arrange
      const base64 = '1';
      const url = `http://localhost:3000/photos/post`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

      // Act & Assert
      service.uploadPhoto(base64).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url, { base64 });

        done();
      });
    });

    it('should return the result from the httpClient.post() method', () => {
      // Arrange
      const base64 = '1';
      const url = `http://localhost:3000/photos/post`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

      // Act
      const result = service.uploadPhoto(base64);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('createPost()', () => {
    it('should call the httpClient.post() method once with correct parameters', done => {
      // Arrange
      const newPost: any = 'post';
      const url = `http://localhost:3000/posts/create`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

      // Act & Assert
      service.createPost(newPost).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url, newPost);

        done();
      });
    });

    it('should return the result from the httpClient.post() method', () => {
      // Arrange
      const newPost: any = 'post';
      const url = `http://localhost:3000/photos/post`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

      // Act
      const result = service.createPost(newPost);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('likePost()', () => {
    it('should call the httpClient.post() method once with correct parameters', done => {
      // Arrange
      const postId = '1';
      const url = `http://localhost:3000/posts/${postId}/likes`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

      // Act & Assert
      service.likePost(postId).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url, {});

        done();
      });
    });

    it('should return the result from the httpClient.post() method', () => {
      // Arrange
      const newPost: any = 'post';
      const url = `http://localhost:3000/photos/post`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'post').mockReturnValue(returnValue);

      // Act
      const result = service.createPost(newPost);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('getLikesOfPost()', () => {
    it('should call the httpClient.get() method once with correct parameters', done => {
      // Arrange
      const postId = '1';
      const url = `http://localhost:3000/posts/${postId}/likes`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act & Assert
      service.getLikesOfPost(postId).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url);

        done();
      });
    });
    it('should return the result from the httpClient.get() method', () => {
      // Arrange
      const postId = '1';
      const url = `http://localhost:3000/posts/${postId}/likes`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'get').mockReturnValue(returnValue);

      // Act
      const result = service.getLikesOfPost(postId);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
  describe('deletePost()', () => {
    it('should call the httpClient.delete() method once with correct parameters', done => {
      // Arrange
      const id = 10;
      const url = `http://localhost:3000/posts/${id}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'delete').mockReturnValue(returnValue);

      // Act & Assert
      service.deletePost(id).subscribe(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(url);

        done();
      });
    });
    it('should return the result from the httpClient.delete() method', () => {
      // Arrange
      const id = 10;
      const url = `http://localhost:3000/posts/${id}`;
      const returnValue = of('return value');

      const spy = jest.spyOn(httpClient, 'delete').mockReturnValue(returnValue);

      // Act
      const result = service.deletePost(id);

      // Assert
      expect(result).toEqual(returnValue);
    });
  });
});
