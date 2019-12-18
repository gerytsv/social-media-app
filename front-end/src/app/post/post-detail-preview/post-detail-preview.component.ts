import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Post } from '../../common/post';
import { PostsDataService } from '../services/posts-data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-post-detail-preview',
  templateUrl: './post-detail-preview.component.html',
  styleUrls: ['./post-detail-preview.component.css'],
})
export class PostDetailPreviewComponent implements OnInit {
  public post: Post;
  public dateOfPost: string;
  public username: string;
  public avatar: string;

  constructor(
    private readonly postsService: PostsDataService,
    private readonly dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.postsService
      .getPostById(this.data.data.post.id)
      .subscribe(response => {
        this.post = response;
        this.username = this.post.user.username;
        this.avatar = this.post.user.avatar;
        this.dateOfPost = moment(this.post.postedOn).format(
          'MMM DD YYYY HH:mm'
        );
      });
  }

  public close() {
    this.dialog.closeAll();
  }

  public get userLink() {
    return ['/users', this.post.user.username];
  }
}
