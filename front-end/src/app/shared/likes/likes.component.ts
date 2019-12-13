import { Component, OnInit, Input } from '@angular/core';
import { PostsDataService } from '../../post/services/posts-data.service';
import { PostDTO } from '../../post/models/post.dto';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  @Input() public post: PostDTO;
  public likes = { likes: 0 };
  public myLike = false;

  constructor(private readonly postsDataService: PostsDataService) {}

  public likePost() {
    this.postsDataService.likePost(this.post.id).subscribe(res => {
      this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
        this.likes.likes = res.likes.likes;
        this.myLike = res.myLikes.isLiked;
      });
    });
  }

  ngOnInit() {
    this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
      this.likes = res.likes;
      this.myLike = res.myLikes.isLiked;
    });
  }
}
