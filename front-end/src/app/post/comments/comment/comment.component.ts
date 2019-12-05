import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { CommentsDataService } from '../comments-data.service';
import { CommentDTO } from '../models/comment.dto';
@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
    constructor(
        private readonly authService: AuthService,
        private readonly commentsDataService: CommentsDataService
    ) {}

    @Input() public comment: CommentDTO;
    @Output() public deleteCommentId: EventEmitter<string> = new EventEmitter();
    public commentOwner: string;
    public isCommentOwner = false;
    public show = false;

    ngOnInit() {
        console.log(this.comment);
        this.authService.loggedUser$.subscribe(res => {
            this.comment.createdOn = new Date();
            this.commentOwner = res.username;
            this.comment.user.username === this.commentOwner
                ? (this.isCommentOwner = true)
                : (this.isCommentOwner = false);
        });
    }

    public deleteComment() {
        this.deleteCommentId.emit(this.comment.id);
        this.commentsDataService.deleteComment(this.comment.id).subscribe();
    }
}
