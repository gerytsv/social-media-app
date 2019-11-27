import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShowDetailedInfoDTO } from '../../components/users/models/show-detailed-info.dto';

@Injectable()
export class SearchService {

  constructor(private readonly http: HttpClient) {}

  public searchUsers(username: string): Observable<ShowDetailedInfoDTO[]> {
    return this.http.get<ShowDetailedInfoDTO[]>(
      `http://localhost:3000/api/users?username=${username}`
    );
  }
}
