import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterViewInit,
} from '@angular/core';
import { PostsDataService } from '../../post/services/posts-data.service';
import { PostDTO } from '../../post/models/post.dto';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit, AfterViewInit {
  @Input() public post: PostDTO;
  public likes = { likes: 0 };
  public myLike = false;

  constructor(private readonly postsDataService: PostsDataService) {}

  public likePost() {
    this.postsDataService.likePost(this.post.id).subscribe(r => {
      this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
        this.likes.likes = res.likes.likes;
        this.myLike = res.myLikes.isLiked;
      });
    });
  }

  public getNumberOfLikes() {
    return this.likes.likes;
  }

  ngOnInit() {
    this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
      this.likes = res.likes;
      this.myLike = res.myLikes.isLiked;
    });
  }

  private changeView() {
    this.postsDataService.getLikesOfPost(this.post.id).subscribe(res => {
      this.likes = res.likes;
      this.myLike = res.myLikes.isLiked;
    });
  }

  ngAfterViewInit() {
    console.log('in');
    this.changeView();
  }
}
