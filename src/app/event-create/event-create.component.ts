import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../services/event.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  eventForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  get f() {
    return this.eventForm.controls;
  }
  ngOnInit(): void {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
    });
  
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(+eventId).subscribe(event => {
        this.eventForm.patchValue(event);
      });
    }
  }
  

  onSubmit(): void {
    this.submitted = true;
    if (this.eventForm.invalid) return;
  
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      // Update
      this.eventService.updateEvent(+eventId, this.eventForm.value).subscribe(() => {
        this.router.navigate(['/events']);
      });
    } else {
      // Create
      this.eventService.createEvent(this.eventForm.value).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
  
  
}