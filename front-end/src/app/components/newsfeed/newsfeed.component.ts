import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsDataService } from '../../post/services/posts-data.service';
import { PostDTO } from '../../post/models/post.dto';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {
  public posts: PostDTO[] = [];
  public take = 5;
  public skip = 5;
  public ready = false;

  constructor(
    private readonly postsService: PostsDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ posts }) => {
      posts.posts.subscribe(postsArray => {
        this.posts = postsArray;
      });
    });
  }

  public onScroll() {
    this.postsService.followedPosts(this.take, this.skip).subscribe(res => {
      if (res.length === 0) {
        this.ready = true;
      }
      this.posts = [...this.posts, ...res];
      this.skip += this.take;
    });
  }
}
