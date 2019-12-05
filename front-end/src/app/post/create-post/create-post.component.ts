import { Component, OnInit, Input } from '@angular/core';
import { PostsDataService } from '../services/posts-data.service';
import { NotificatorService } from '../../core/services/notificator.service';
import { AuthService } from '../../core/services/auth.service';
import { CreatePostDTO } from '../models/create-post.dto';
import * as moment from 'moment';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
    public imgUrl: string;
    public description: string;
    public isPrivate: boolean = false;

    constructor(
        private readonly postsDataService: PostsDataService,
        private readonly notificator: NotificatorService,
        private readonly authService: AuthService
    ) {}

    public imageCropped(base64: string) {
        const base64Arr = base64.split(',');
        this.imgUrl = base64Arr[1];
    }

    public onPostButtonClick() {
        let imgurUrl: string = '';
        let dateOfPost = moment(new Date()).format('MMM Do YY');

        this.postsDataService.uploadPhoto(this.imgUrl).subscribe(res => {
            imgurUrl = res.photoLink;
            const post: CreatePostDTO = {
                description: this.description,
                photoUrl: imgurUrl,
                isPrivate: this.isPrivate,
            };
            console.log(post);
            this.postsDataService.createPost(post).subscribe(res => {});
        });
    }

    public isPrivateButtonClick() {
        this.isPrivate = !this.isPrivate;
        // console.log(`isPrivate state: ${this.isPrivate}`);
    }

    ngOnInit() {}
}
