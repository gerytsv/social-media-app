import { PostDetailPreviewComponent } from "./post-detail-preview/post-detail-preview.component";
import { LikesComponent } from "./likes/likes.component";
import { PostPreviewComponent } from "./post-preview/post-preview.component";
import { CoreModule } from "./../core/core.module";
import { PostsDataService } from "./services/posts-data.service";
import { PostComponent } from "./post.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    PostComponent,
    PostPreviewComponent,
    PostDetailPreviewComponent,
    LikesComponent,
    CommentsComponent
  ],
  imports: [CommonModule],
  providers: [PostsDataService],
  exports: [PostComponent, PostPreviewComponent]
})
export class PostsModule {}
