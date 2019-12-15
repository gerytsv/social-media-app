import { Resolve } from '@angular/router';
import { PostsDataService } from '../../post/services/posts-data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AllPostsResolver implements Resolve<any> {
  constructor(private readonly postsService: PostsDataService) {}

  resolve() {
    return { posts: this.postsService.allPosts(25, 0) };
  }
}
