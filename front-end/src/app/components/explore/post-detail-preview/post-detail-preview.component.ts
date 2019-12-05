import { PostsDataService } from '../../../post/services/posts-data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Post } from '../../../common/post';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MAT_DIALOG_DATA } from '@angular/material';

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
        private readonly route: ActivatedRoute,
        private readonly postsService: PostsDataService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {
        // this.route.data.subscribe(({ post }) => {
        //   this.post = post;
        //   this.dateOfPost = moment(this.post.postedOn).format("MMM Do YY");
        // });
        this.postsService
            .getPostById(this.data.data.post.id)
            .subscribe(response => {
                this.post = response;
                this.username = this.post.user.username;
                this.avatar = this.post.user.avatar;
                console.log(this.post);
            });
    }
}
