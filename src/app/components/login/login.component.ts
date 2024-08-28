import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  
  users = JSON.parse(localStorage.getItem('users') || '[]');
  // constructor(private router: Router) {}

  // login(role: string): void {
  //   let user = {};

  //   if (role === 'admin') {
  //     if (this.username === 'admin' && this.password === 'admin') {
  //       user = { username: this.username, role: 'admin' };
  //       localStorage.setItem('user', JSON.stringify(user));
  //       this.router.navigate(['/admin']);
  //     } else {
  //       alert('Invalid admin credentials');
  //     }
  //   } else if (role === 'customer') {
  //     // Perform customer login logic
  //     // For simplicity, assume any non-admin user is a customer
  //     user = { username: this.username, role: 'customer' };
  //     localStorage.setItem('user', JSON.stringify(user));
  //     this.router.navigate(['/']);
  //   }
  // }

  // username = '';
  // password = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(role: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    // const user = users.find((u: any) => u.username === this.username && u.password === this.password && u.role === role);

    console.log("role from login button"+role);
    console.log("users:::::::::::::::::::::"+JSON.stringify(users));
    // console.log("user:::::::::::::::::::::"+user);
    if (users) {
      if (role === 'admin') {
        alert("adminlog");
        this.router.navigate(['/admin']);
      } else if(role === 'customer') {
        alert("customerlog");
        this.router.navigate(['/']);

      }
      localStorage.setItem('log', 'true');
    } else {
      alert('Invalid credentials or role.');
    }
  }
}
