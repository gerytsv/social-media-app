import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostDTO } from "../models/post.dto";
import { CONFIG } from "../../config/config";
import { CreatePostDTO } from "../models/create-post.dto";

@Injectable({
  providedIn: "root"
})
export class PostsDataService {
  constructor(private readonly http: HttpClient) {}

  public allPosts(): Observable<any> {
    return this.http.get<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts`);
  }

  public followedPosts(): Observable<any> {
    return this.http.get<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts/feed`);
  }

  public getPostById(id: number): Observable<PostDTO> {
    return this.http.get<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts/${id}`);
  }

  public createPost(newPost: CreatePostDTO): Observable<PostDTO> {
    return this.http.post<PostDTO>(
      `${CONFIG.DOMAIN_NAME}/posts/create`,
      newPost
    );
  }

  public deletePost(id: number): Observable<PostDTO> {
    return this.http.delete<PostDTO>(`${CONFIG.DOMAIN_NAME}/posts/${id}`);
  }
}
