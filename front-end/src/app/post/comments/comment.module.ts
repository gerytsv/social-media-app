import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { CommentsDataService } from './comments-data.service';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { CommentsUnderPostComponent } from './comments-under-post/comments-under-post.component';

@NgModule({
    declarations: [
        CommentComponent,
        CreateCommentComponent,
        AllCommentsComponent,
        CommentsUnderPostComponent
    ],
    imports: [CommonModule, FormsModule],
    providers: [CommentsDataService],
    exports: [CommentComponent, CreateCommentComponent, AllCommentsComponent, CommentsUnderPostComponent],
})
export class CommentModule {}
