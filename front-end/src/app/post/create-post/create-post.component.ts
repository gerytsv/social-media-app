import { Component, OnInit, Input } from '@angular/core';
import { PostsDataService } from '../services/posts-data.service';
import { NotificatorService } from '../../core/services/notificator.service';
import { AuthService } from '../../core/services/auth.service';
import { CreatePostDTO } from '../models/create-post.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  public imgUrl: string;
  public description: string;
  public isPrivate = false;

  constructor(
    private readonly postsDataService: PostsDataService,
    private readonly notificator: NotificatorService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  public imageCropped(base64: string) {
    const base64Arr = base64.split(',');
    this.imgUrl = base64Arr[1];
  }

  public onPostButtonClick() {
    let imgurUrl = '';
    this.notificator.warn('Uploading new post...');

    this.postsDataService.uploadPhoto(this.imgUrl).subscribe(
      res => {
        imgurUrl = res.photoLink;
        const post: CreatePostDTO = {
          description: this.description,
          photoUrl: imgurUrl,
          isPrivate: this.isPrivate,
        };

        this.postsDataService.createPost(post).subscribe(() => {
          this.notificator.success('Post uploaded succesfully');
          this.router.navigate(['/home']);
        });
      },
      () => this.notificator.error('Could not upload picture')
    );
  }

  public isPrivateCheck() {
    this.isPrivate = true;
  }

  public isPublicCheck() {
    this.isPrivate = false;
  }
}
