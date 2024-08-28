import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  role = 'customer'; // Default role

  constructor(private router: Router) {}

  signup(): void {
    const newUser = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
    };

    // let users = JSON.parse(localStorage.getItem('users') || '[]');
    // users.push(newUser);
    localStorage.setItem('users', JSON.stringify(newUser));

    alert('Signup successful! You can now log in.');
    this.router.navigate(['/login']);
  }
}
