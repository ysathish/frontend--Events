import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient,private router: Router) {}

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
  login(user: any):Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user, { responseType: 'text' }); // Because JWT is string
  }
  getAccount(): Observable<any> {
    return this.http.get(`${this.apiUrl}/account`);
  }
  
  updateAccount(data: { name: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/account`, data);
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}
