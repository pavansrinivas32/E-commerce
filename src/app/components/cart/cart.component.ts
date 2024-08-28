import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItems.push(data);
    console.log("cart store::::::::::::::::",this.cartItems);
  }

  onCheckout() {
    this.router.navigate(['/address']);
  }

  // removeFromCart(product: any): void {
  //   this.cartService.removeFromCart(product);
  //   this.cartItems = this.cartService.getCartItems(); // Refresh cart items
  // }
}