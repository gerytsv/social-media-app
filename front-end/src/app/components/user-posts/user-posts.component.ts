import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { PostDTO } from '../../post/models/post.dto';
import { ShowDetailedInfoDTO } from '../users/models/show-detailed-info.dto';
import { User } from '../users/models/user';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements DoCheck {
  @Input() user: ShowDetailedInfoDTO;
  @Input() followed = true;
  @Input() isOwner = false;
  public copyOfPosts: PostDTO[];

  constructor(private readonly authService: AuthService) {}

  public ngDoCheck() {
    this.changeView();
  }

  public changeView() {
    if (this.isOwner === false && this.followed === false) {
      this.copyOfPosts = this.user.posts.filter(
        post => post.isPrivate === false
      );
    } else {
      this.copyOfPosts = [...this.user.posts];
    }
  }
}
