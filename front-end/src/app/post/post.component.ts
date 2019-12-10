import { Component, OnInit, Input } from '@angular/core';
import { PostDTO } from './models/post.dto';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() public post: PostDTO;
  constructor() {}

  ngOnInit() {}
}
