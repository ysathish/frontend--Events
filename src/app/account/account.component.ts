import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      name: [''],
      newPassword: ['']
    });

    this.authService.getAccount().subscribe((data) => {
      this.accountForm.patchValue({ name: data.name });
    });
  }

  onSubmit(): void {
    this.authService.updateAccount(this.accountForm.value).subscribe(() => {
      alert('Account updated!');
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
