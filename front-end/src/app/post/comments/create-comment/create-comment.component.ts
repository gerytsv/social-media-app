import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
})
export class CreateCommentComponent implements OnInit {
  public content = '';
  public postId: string;
  @Output() public bodyToSend: EventEmitter<{
    content: string;
  }> = new EventEmitter();

  constructor() {}

  public onPostButtonClick() {
    this.bodyToSend.emit({ content: this.content });
    this.content = '';
  }

  ngOnInit() {}
}
