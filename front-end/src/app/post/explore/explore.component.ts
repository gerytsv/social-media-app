import { PostDTO } from "./../models/post.dto";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReplaySubject, Subject, Observable } from "rxjs";
import { Post } from "../../common/post";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.css"]
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
          console.log("No posts to show!");
        }
      });
    });
  }

  public selectPost(post: Post) {
    this.router.navigate(["explore/posts", post.id]);
  }
}

// private postsSubject$ = new Subject<Partial<PostDTO>>();
// public get posts$(): Observable<Partial<PostDTO>> {
//   return this.postsSubject$.asObservable();
// }

// public emitPosts(): void {
//   this.route.data.subscribe(({ posts }) => {
//     posts.posts.subscribe(postsArray => {
//       postsArray.forEach(post => this.postsSubject$.next(post));
//     });
//   });
// }
