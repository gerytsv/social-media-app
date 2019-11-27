import { NewsfeedResolver } from "../../core/resolvers/newsfeed.resolver";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsDataService } from "../../post/services/posts-data.service";
import { PostDTO } from "../../post/models/post.dto";

@Component({
  selector: "app-newsfeed",
  templateUrl: "./newsfeed.component.html",
  styleUrls: ["./newsfeed.component.css"]
})
export class NewsfeedComponent implements OnInit {
  public posts: PostDTO[] = [];
  constructor(
    private readonly postsServive: PostsDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ posts }) => {
      posts.posts.subscribe(postsArray => {
        this.posts = postsArray.flat();
        if (this.posts.length === 0) {
          console.log("No posts to show!");
        }
        console.log(this.posts);
      });
    });
  }
}
