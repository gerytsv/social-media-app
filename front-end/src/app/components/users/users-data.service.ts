import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowUserInfoDTO } from './models/show-user-info.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  public constructor(private readonly http: HttpClient) {}


  public getUserById(id: string): Observable<ShowUserInfoDTO> {
    return this.http.get<ShowUserInfoDTO>(`http://localhost:3000/api/users/${id}`);
  }

  public updateProfilePic(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>('http://localhost:3000/api/photos', formData);
  }

  public updateProfileInfo(data: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/users/account', data);
  }
}
