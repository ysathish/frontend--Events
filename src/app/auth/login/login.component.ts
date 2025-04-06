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
      next: (res) => {
        // res is the raw JWT string (not an object), so store it directly
        localStorage.setItem('token', res);
        this.router.navigate(['/events']);
      },
      error: () => alert('Login failed'),
    });
  }
  
}
