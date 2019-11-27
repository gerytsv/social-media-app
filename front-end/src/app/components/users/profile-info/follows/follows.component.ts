import { Component, OnInit, Input } from '@angular/core';
import { ShowDetailedInfoDTO } from '../../models/show-detailed-info.dto';
import { ShowUserInfoDTO } from '../../models/show-user-info.dto';

@Component({
  selector: 'app-follows',
  templateUrl: './follows.component.html',
  styleUrls: ['./follows.component.css']
})
export class FollowsComponent implements OnInit {
  @Input() public user: ShowDetailedInfoDTO;
  public showFollowers = false;
  public showFollowed = false;

  constructor() {}

  ngOnInit() {

  }

  public toggleFollowers() {
    if (this.user.followers.length === 0) {
      this.showFollowers = false;
    } else {
      this.showFollowers = !this.showFollowers;
    }
    this.showFollowed = false;
  }

  public toggleFollowed() {
    if (this.user.followed.length === 0) {
      this.showFollowed = false;
    } else {
      this.showFollowed = !this.showFollowed;
    }
    this.showFollowers = false;
  }

  public close() {
    this.showFollowed = false;
    this.showFollowers = false;
  }
}
