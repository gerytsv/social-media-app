import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommentModule } from './comments/comment.module';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsDataService } from './services/posts-data.service';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { UploadImagePostComponent } from './create-post/upload-image-post/upload-image-post.component';
import { ImageCropperModule } from './create-post/image-cropper/image-cropper.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { SinglePostResolver } from '../core/resolvers/single-post.resolver';
import { PostPreviewComponent } from '../components/explore/post-preview/post-preview.component';
import { PostDetailPreviewComponent } from './post-detail-preview/post-detail-preview.component';

@NgModule({
  declarations: [
    PostComponent,
    UploadImagePostComponent,
    CreatePostComponent,
    PostPreviewComponent,
    PostDetailPreviewComponent,
  ],
  imports: [
    SharedModule,
    ImageCropperModule,
    PostsRoutingModule,
    CommentModule,
    FormsModule,
  ],
  providers: [PostsDataService, SinglePostResolver],
  exports: [
    PostComponent,
    PostPreviewComponent,
    PostDetailPreviewComponent,
    CreatePostComponent,
  ],
})
export class PostsModule {}
