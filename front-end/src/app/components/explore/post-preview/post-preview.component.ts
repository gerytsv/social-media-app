import { Component, OnInit, Input } from "@angular/core";
import { DialogService } from "../../../core/services/dialog.service";
import { PostDTO } from "../../../post/models/post.dto";

@Component({
  selector: "app-post-preview",
  templateUrl: "./post-preview.component.html",
  styleUrls: ["./post-preview.component.css"]
})
export class PostPreviewComponent implements OnInit {
  @Input() public post: PostDTO;

  constructor(private readonly dialogService: DialogService) {}

  public onPostClick() {
    this.dialogService.openPostPreview({
      data: { user: this.post.user, post: this.post }
    });
  }

  ngOnInit() {}
}
