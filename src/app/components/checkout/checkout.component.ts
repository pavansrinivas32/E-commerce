import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  customerName = '';
  customerAddress = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  placeOrder(): void {
    const cartItems = this.cartService.getCartItems();
    const productIds = cartItems.map(item => item.id);

    const order = {
      productIds,
      customerName: this.customerName,
      customerAddress: this.customerAddress,
      status: 'pending'
    };

    this.orderService.placeOrder(order).subscribe(() => {
      this.cartService.clearCart();
      this.router.navigate(['/']);
      alert('Order placed successfully!');
    });
  }
}