import { Component, OnInit, Input } from '@angular/core';
import { ShowHistoryDTO } from '../models/show-history-dto';

@Component({
  selector: 'app-single-history-preview',
  templateUrl: './single-history-preview.component.html',
  styleUrls: ['./single-history-preview.component.css']
})
export class SingleHistoryPreviewComponent implements OnInit {

  @Input() public singleHistory: ShowHistoryDTO;

  constructor() { }

  ngOnInit() {
  }

}
