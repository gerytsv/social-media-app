import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostDTO } from '../models/post.dto';
import { CONFIG } from '../../config/config';
import { CreatePostDTO } from '../models/create-post.dto';

@Injectable({
  providedIn: 'root',
})
export class PostsDataService {
  constructor(private readonly http: HttpClient) {}

  public allPosts(take: number, skip: number): Observable<any> {
    return this.http.get<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts?take=${take}&skip=${skip}`);
  }

  public followedPosts(take: number, skip: number): Observable<any> {
    return this.http.get<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts/feed?take=${take}&skip=${skip}`);
  }

  public getPostById(id: string): Observable<PostDTO> {
    return this.http.get<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts/${id}`);
  }

  public uploadPhoto(base64: string): Observable<any> {
    return this.http.post<any>(`${CONFIG.DOMAIN_NAME}/api/photos/post`, {
      base64,
    });
  }

  public createPost(newPost: CreatePostDTO): Observable<PostDTO> {
    return this.http.post<PostDTO>(
      `${CONFIG.DOMAIN_NAME}/posts/create`,
      newPost
    );
  }

  public likePost(postId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${CONFIG.DOMAIN_NAME}/api/posts/${postId}/likes`,
      {}
      // { isLiked: true }
    );
  }

  public getLikesOfPost(postId: string): Observable<any> {
    return this.http.get<any>(
      `${CONFIG.DOMAIN_NAME}/api/posts/${postId}/likes`
    );
  }

  public deletePost(id: number): Observable<PostDTO> {
    return this.http.delete<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts/${id}`);
  }
}
