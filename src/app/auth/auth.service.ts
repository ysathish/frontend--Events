import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  // login(credentials: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, credentials);
  // }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('token');
  // }

  // logout(): void {
  //   localStorage.removeItem('token');
  // }
  login(user: any) {
    return this.http.post(`${this.apiUrl}/login`, user, { responseType: 'text' }); // Because JWT is string
  }
}
