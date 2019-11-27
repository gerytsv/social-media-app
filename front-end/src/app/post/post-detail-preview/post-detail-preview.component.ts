import { PostsDataService } from "./../services/posts-data.service";
import { Component, OnInit } from "@angular/core";
import { Post } from "../../common/post";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-post-detail-preview",
  templateUrl: "./post-detail-preview.component.html",
  styleUrls: ["./post-detail-preview.component.css"]
})
export class PostDetailPreviewComponent implements OnInit {
  public post: Post;
  public dateOfPost: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsDataService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(({ post }) => {
      this.post = post;
      this.dateOfPost = moment(this.post.postedOn).format("MMM Do YY");
    });
  }
}
