import { FormsModule } from '@angular/forms';
import { CommentModule } from './comments/comment.module';
import { PostsRoutingModule } from './posts-routing.module';
import { LikesComponent } from './likes/likes.component';
import { PostsDataService } from './services/posts-data.service';
import { PostComponent } from './post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagePostComponent } from './create-post/upload-image-post/upload-image-post.component';
import { ImageCropperModule } from './create-post/image-cropper/image-cropper.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { SinglePostResolver } from '../core/resolvers/single-post.resolver';
import { PostPreviewComponent } from '../components/explore/post-preview/post-preview.component';
import { PostDetailPreviewComponent } from '../components/explore/post-detail-preview/post-detail-preview.component';

@NgModule({
    declarations: [
        LikesComponent,
        PostComponent,
        UploadImagePostComponent,
        CreatePostComponent,
        PostPreviewComponent,
        PostDetailPreviewComponent,
    ],
    imports: [
        CommonModule,
        ImageCropperModule,
        PostsRoutingModule,
        CommentModule,
        FormsModule,
    ],
    providers: [PostsDataService, SinglePostResolver],
    exports: [
        PostComponent,
        LikesComponent,
        PostPreviewComponent,
        PostDetailPreviewComponent,
        CreatePostComponent,
    ],
})
export class PostsModule {}
