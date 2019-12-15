import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminDataService } from './admin-data.service';
import { ShowHistoryDTO } from './models/show-history-dto';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.component.html',
  styleUrls: ['./admin-history.component.css']
})
export class AdminHistoryComponent implements OnInit, OnDestroy {

  constructor(private readonly adminDataService: AdminDataService) { }

  public history: ShowHistoryDTO[];
  public interval: any;

  ngOnInit() {
    this.adminDataService.getHistory().subscribe(res => this.history = res.reverse());
    this.interval = setInterval(() => {
      this.adminDataService.getHistory().subscribe(res => this.history = res.reverse()); }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
