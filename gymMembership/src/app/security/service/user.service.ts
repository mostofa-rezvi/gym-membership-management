import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageUtil } from '../util/storage.util';
import { Observable } from 'rxjs';
import { ApiResponse } from '../util/api.response.model';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const jwt = StorageUtil.getFromLocalStorage('jwt');
    return new HttpHeaders({
      Authorization: `Bearer ${jwt}`,
    });
  }

  findAllUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + '/findAllUsers', {
      headers: this.getAuthHeaders(),
    });
  }

  findUsersByRole(role: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      this.apiUrl + '/findUsersByRole?role=' + role
    );
  }

  findById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/findById/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  saveUser(user: UserModel): Observable<ApiResponse> {
    const formData = new FormData();
    formData.append(
      'user',
      new Blob([JSON.stringify(user)], { type: 'application/json' })
    );

    console.log(formData);
    return this.http.post<ApiResponse>(this.apiUrl + '/saveUser', formData, {
      headers: this.getAuthHeaders(),
    });
  }

  updateUser(user: UserModel): Observable<ApiResponse> {
    const formData = new FormData();
    formData.append(
      'user',
      new Blob([JSON.stringify(user)], { type: 'application/json' })
    );

    return this.http.put<ApiResponse>(this.apiUrl + '/updateUser', formData, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/deleteById/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
