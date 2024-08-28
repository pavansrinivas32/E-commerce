import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  constructor(private router: Router) {}

  onPaymentSuccess() {
    const orders = JSON.parse(localStorage.getItem('order') || '[]');
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log("paycart"+cartItems);
    orders.push({ items: cartItems, address: localStorage.getItem('address') });
    localStorage.setItem('order', JSON.stringify(orders));
    localStorage.removeItem('carts');
    this.router.navigate(['/order-confirmation']);
  }

  onPaymentFailed() {
    alert('Payment failed. Please try again.');
  }
}
