import { Component, OnInit, Input } from '@angular/core';
import { ShowDetailedInfoDTO } from '../../components/users/models/show-detailed-info.dto';

@Component({
  selector: 'app-minimized-user',
  templateUrl: './minimized-user.component.html',
  styleUrls: ['./minimized-user.component.css'],
})
export class MinimizedUserComponent implements OnInit {
  @Input() public user: ShowDetailedInfoDTO;

  constructor() {}

  ngOnInit() {}

  public get profileLink() {
    return ['/users', this.user.username];
  }
}
