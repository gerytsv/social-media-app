import { PostPreviewComponent } from "../components/post-preview/post-preview.component";
import { CoreModule } from "./../core/core.module";
import { PostsDataService } from "./services/posts-data.service";
import { PostComponent } from "./post.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [PostComponent, PostPreviewComponent],
  imports: [CommonModule],
  providers: [PostsDataService],
  exports: [PostComponent, PostPreviewComponent]
})
export class PostsModule {}
