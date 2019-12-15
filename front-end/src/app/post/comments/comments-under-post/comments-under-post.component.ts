import { CommentDTO } from '../models/comment.dto';
import { CommentsDataService } from '../comments-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../components/users/models/user';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-comments-under-post',
  templateUrl: './comments-under-post.component.html',
  styleUrls: ['./comments-under-post.component.css'],
})
export class CommentsUnderPostComponent implements OnInit {
  @Input() postId: string;
  public haveComments = false;
  public user: User;
  public comments: CommentDTO[] = [];
  constructor(
    private readonly commentsDataService: CommentsDataService,
    private readonly authService: AuthService
  ) {}

  public ngOnInit() {
    this.authService.loggedUser$.subscribe(res => (this.user = res));
    this.commentsDataService.getCommentsOfPost(this.postId).subscribe(res => {
      this.comments = res;
    });
  }

  public createComment(content: any) {
    this.commentsDataService.createComment(this.postId, content).subscribe(
      res => {
        this.comments = [res, ...this.comments];
      },
      errors => {
        //
      }
    );
  }

  public removeComment(commentToBeDeleted: CommentDTO) {
    const index = this.comments.indexOf(commentToBeDeleted);
    console.log(index);
    this.comments.splice(index, 1);
  }
}
