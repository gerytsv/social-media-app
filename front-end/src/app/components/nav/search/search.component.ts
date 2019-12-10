import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../../core/services/search.service';
import { ShowDetailedInfoDTO } from '../../users/models/show-detailed-info.dto';
import { debounceTime, distinctUntilChanged, debounce } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public closeMenu: EventEmitter<null> = new EventEmitter();

  private readonly searchSubject$ = new Subject<string>();

  public showUsersResults = false;
  public users: ShowDetailedInfoDTO[] = [];
  public inputValue = '';
  public searchInput = new FormControl();

  constructor(private readonly searchService: SearchService) {
  }

  ngOnInit() {

    this.searchSubjectAsObservable.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(res => {
      this.search(res); }
      );
  }

  public get searchSubjectAsObservable() {
    return this.searchSubject$.asObservable();
  }

  public search(username: string) {
    this.searchService.searchUsers(username).subscribe(res => {
      this.users = res;
    });
  }

  public emitToSubject(username: string) {
    this.searchSubject$.next(username);
  }

  public toggleResults() {
    this.showUsersResults = false;
  }

  public showResults() {
    this.showUsersResults = true;
  }

  public closeResults(input: string) {
    if (!input) {
      this.showUsersResults = false;
    }
  }

  public clearInput() {
    this.inputValue = '';
  }

  public closeNav() {
    this.closeMenu.emit();
  }

}
