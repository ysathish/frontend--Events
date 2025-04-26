import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.user).subscribe({
      next: (res:string) => { // Handle the response as a string (JWT)
        // const parsed = JSON.parse(res);
      // localStorage.setItem('token', parsed.token);
        localStorage.setItem('token', res); // Store the token
        this.router.navigate(['/events']); // Navigate to events page
      },
      error: () => alert('Login failed'),
    });
  }
  
}
