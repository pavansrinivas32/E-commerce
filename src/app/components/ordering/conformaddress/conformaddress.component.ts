import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conformaddress',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './conformaddress.component.html',
  styleUrl: './conformaddress.component.css'
})
export class ConformaddressComponent {
  address: string = 'rajahmundry';

  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('address', this.address);
    this.router.navigate(['/payment']);
  }
}
