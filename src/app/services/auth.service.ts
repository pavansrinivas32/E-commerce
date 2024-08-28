import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authStatusChanged = new Subject<void>();

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getRole(): string | null {
    // const user =  http://localhost:3000/users;
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || null;
  }

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    // this.authStatusChanged.next();
  }

  logout(): void {
    localStorage.removeItem('user');
    // this.authStatusChanged.next();
  }
}
