import { CommentDTO } from './../models/comment.dto';
import { CommentsDataService } from './../comments-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../components/users/models/user';
import { AuthService } from '../../../core/services/auth.service';
import { PostDTO } from '../../models/post.dto';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
})
export class AllCommentsComponent implements OnInit {
  @Input() post: PostDTO;
  public haveComments = false;
  public user: User;

  constructor(
    private readonly commentsDataService: CommentsDataService,
    private readonly authService: AuthService
  ) {}

  public ngOnInit() {
    this.authService.loggedUser$.subscribe(res => (this.user = res));
  }

  public createComment(content: any) {
    this.commentsDataService.createComment(this.post.id, content).subscribe(
      res => {
        this.post.comments = [res, ...this.post.comments];
        this.haveComments = true;
      },
      errors => {
        //
      }
    );
  }

  public removeComment(commentId: string) {
    this.post.comments.shift();
    this.haveComments = false;
  }
}
