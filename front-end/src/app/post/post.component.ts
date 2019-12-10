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
  constructor() {}

  ngOnInit() {
    this.dateOfPost = moment(new Date()).format('MMM Do YY');
  }
}
