import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:8080/api/events'; // Spring Boot backend

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8080/api/events');
  }
  createEvent(eventData: any): Observable<any> {
    return this.http.post(this.baseUrl, eventData);
  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}/${id}`);
  }
  
  updateEvent(id: number, eventData: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseUrl}/${id}`, eventData);
  }
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
  
  
  
}
