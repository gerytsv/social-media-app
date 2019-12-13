import { PostDTO } from '../../post/models/post.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { Post } from '../../common/post';
import { PostsDataService } from '../../post/services/posts-data.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  public posts: PostDTO[] = [];
  public take = 25;
  public skip = 25;
  public ready = false;
  public noPosts = false;

  constructor(
    private route: ActivatedRoute,
    private readonly postsService: PostsDataService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ posts }) => {
      posts.posts.subscribe(postsArray => {
        this.posts = postsArray;
        if (this.posts.length === 0) {
          this.noPosts = true;
        }
      });
    });
  }

  public onScroll() {
    this.postsService.allPosts(this.take, this.skip).subscribe(res => {
      if (res.length === 0) {
        this.ready = true;
      }
      this.posts = [...this.posts, ...res];
      this.skip += this.take;
    });
  }
}
