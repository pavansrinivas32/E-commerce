import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
 
  isLoggedIn() {
    console.log(!!localStorage.getItem(''));
    return !!localStorage.getItem('log');
  }

  isAdmin(): boolean {
    // alert("hitadminlog")
    const user = JSON.parse(localStorage.getItem('users') || '{}');
    return user.role === 'admin';
  }

  isCustomer(): boolean {
    const user = JSON.parse(localStorage.getItem('users') || '{}');
    // alert("customerlog")
    return user.role === 'customer';
  }

  // Mock functions to check login status and role

  logout(): void {
    localStorage.removeItem('users');
    localStorage.removeItem('log');
    this.router.navigate(['/login']);
  }
}