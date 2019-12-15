import { Component, OnInit, Input } from '@angular/core';
import { ShowHistoryDTO } from '../models/show-history-dto';
import * as moment from 'moment';

@Component({
  selector: 'app-single-history-preview',
  templateUrl: './single-history-preview.component.html',
  styleUrls: ['./single-history-preview.component.css']
})
export class SingleHistoryPreviewComponent implements OnInit {

  @Input() public singleHistory: ShowHistoryDTO;

  constructor() { }

  ngOnInit() {
    (this.singleHistory.postedOn as any) = moment(this.singleHistory.postedOn).format('llll');
  }

}
