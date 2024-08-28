import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any): void {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCartItems(): any[] {
    return this.cart;
  }

  removeFromCart(product: any): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }

  clearCart(): void {
    this.cart = [];
  }
}

