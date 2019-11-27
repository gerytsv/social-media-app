import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { ShowDetailedInfoDTO } from '../../users/models/show-detailed-info.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public showUsersResults = false;
  public users: ShowDetailedInfoDTO[] = [];
  public inputValue = '';

  constructor(private readonly searchService: SearchService) {}

  ngOnInit() {
  }

  public search(username: string) {
    this.searchService.searchUsers(username).subscribe(res => {
      this.users = res;
    });
  }

  public toggleResults() {
    this.showUsersResults = false;
  }

  public showResults() {
    this.showUsersResults = true;
  }

  public closeResults(input: string){
    if (!input) {
      this.showUsersResults = false;
    }
  }

  public clearInput() {
    this.inputValue = '';
  }

}
