import { PostDTO } from '../../post/models/post.dto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, Subject, Observable } from 'rxjs';
import { Post } from '../../common/post';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  public posts: PostDTO[] = [];
  public activePost: Post = null;

  constructor(private route: ActivatedRoute, private readonly router: Router) {}

  ngOnInit() {
    this.route.data.subscribe(({ posts }) => {
      posts.posts.subscribe(postsArray => {
        this.posts = postsArray;
        // console.log(this.posts);
        if (this.posts.length === 0) {
          let paragraphNoPosts = document.createElement('P');
          paragraphNoPosts.innerText = 'No posts to show!';
          document
            .getElementById('posts-container')
            .appendChild(paragraphNoPosts);
          // console.log('No posts to show!');
        }
      });
    });
  }

  // public selectPost(post: Post) {
  //   this.router.navigate(["explore/posts", post.id]);
  // }
}
