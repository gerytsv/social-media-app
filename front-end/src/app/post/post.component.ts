import { PostsDataService } from './services/posts-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { PostDTO } from './models/post.dto';
import * as moment from 'moment';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() public post: PostDTO;
  public dateOfPost: string;
  public likes = { likes: 0 };
  public myLike = false; // { liked: false };

  constructor(private readonly postsDataService: PostsDataService) {}

  ngOnInit() {
    this.dateOfPost = moment(new Date()).format('MMM Do YY');

    this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
      this.likes = res.likes;
      this.myLike = res.myLikes.isLiked;

      // console.log('this.likes: ', this.likes);
      // console.log('res.myLikes.isLiked: ', res.myLikes.isLiked);
      // console.log('this.myLike: ', this.myLike);
    });
  }

  public likePost() {
    this.postsDataService.likePost(this.post.id).subscribe(res => {
      this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
        this.likes.likes = res.likes.likes;
        this.myLike = res.myLikes.isLiked;

        // console.log('this.likes: ', this.likes);
        // console.log('res.myLikes.isLiked: ', res.myLikes.isLiked);
        // console.log('this.myLike: ', this.myLike);
      });
    });
  }
}
