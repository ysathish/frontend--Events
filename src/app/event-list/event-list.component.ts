import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchName: string = '';
  searchDate: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data.content; 
      this.filteredEvents = [...this.events];
    });
  }
  filterEvents(): void {
    const keyword = this.searchName.toLowerCase();
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(keyword)
    );
  }
  resetFilters(): void {
    this.searchName = '';
    this.filteredEvents = [...this.events];
  }
  deleteEvent(id: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(() => {
        this.events = this.events.filter(event => event.id !== id); 
        this.filterEvents();
      });
    }
  }
  
  
  
}
