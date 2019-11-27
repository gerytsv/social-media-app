import { Component, OnInit } from '@angular/core';
import { AdminDataService } from './admin-data.service';
import { ShowHistoryDTO } from './models/show-history-dto';

@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.component.html',
  styleUrls: ['./admin-history.component.css']
})
export class AdminHistoryComponent implements OnInit {

  constructor(private readonly adminDataService: AdminDataService) { }

  public history: ShowHistoryDTO[];

  ngOnInit() {
    this.adminDataService.getHistory().subscribe(res => this.history = res);
  }

}
