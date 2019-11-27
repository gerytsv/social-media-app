import { Component, OnInit, Input } from "@angular/core";
import { PostDTO } from "../models/post.dto";

@Component({
  selector: "app-post-preview",
  templateUrl: "./post-preview.component.html",
  styleUrls: ["./post-preview.component.css"]
})
export class PostPreviewComponent implements OnInit {
  @Input() public post: PostDTO;

  constructor() {}

  ngOnInit() {}
}
