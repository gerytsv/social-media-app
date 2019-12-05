import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowUserInfoDTO } from './models/show-user-info.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShowDetailedInfoDTO } from './models/show-detailed-info.dto';

@Injectable({
    providedIn: 'root',
})
export class UsersDataService {
    public constructor(private readonly http: HttpClient) {}

    public getUserByUsername(
        username: string
    ): Observable<ShowDetailedInfoDTO> {
        return this.http.get<ShowDetailedInfoDTO>(
            `http://localhost:3000/api/users/${username}`
        );
    }

    public updateProfilePic(file: any): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<any>(
            'http://localhost:3000/api/photos/avatar',
            formData
        );
    }

    public updateProfileInfo(data: any, id: string): Observable<any> {
        return this.http.put<any>(
            `http://localhost:3000/api/users/${id}/account`,
            data
        );
    }

    public followUser(id: string): Observable<ShowUserInfoDTO> {
        return this.http.post<ShowUserInfoDTO>(
            `http://localhost:3000/api/follow/users/${id}`,
            null
        );
    }

    public unfollowUser(id: string): Observable<ShowUserInfoDTO> {
        return this.http.delete<ShowUserInfoDTO>(
            `http://localhost:3000/api/follow/users/${id}`
        );
    }

    public deleteUser(id: string): Observable<{ messege: string }> {
        return this.http.delete<{ messege: string }>(
            `http://localhost:3000/api/users/${id}`
        );
    }
}
