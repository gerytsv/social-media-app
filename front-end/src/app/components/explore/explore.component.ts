import { Component, OnInit } from "@angular/core";
import { PostDTO } from "../../post/models/post.dto";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.css"]
})
export class ExploreComponent implements OnInit {
  public posts: PostDTO[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(({ posts }) => {
      posts.posts.subscribe(postsArray => {
        this.posts = postsArray; //.flat();
        console.log(this.posts);
        if (this.posts.length === 0) {
          console.log("No posts to show!");
        }
      });
    });
  }
}
