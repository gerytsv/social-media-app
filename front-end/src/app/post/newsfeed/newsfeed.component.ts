import { NewsfeedResolver } from "../../core/resolvers/newsfeed.resolver";
import { Component, OnInit } from "@angular/core";
import { PostDTO } from "../models/post.dto";
import { PostsDataService } from "../services/posts-data.service";
import { ActivatedRoute } from "@angular/router";

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
