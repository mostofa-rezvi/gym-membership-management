import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin(): void {
    console.log('Login attempt with:', this.loginData);
    this.router.navigate(['/dashboard']);
  }
}
