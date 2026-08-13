import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  totalItems$ = this.cartItems$.pipe(
    map(items => items.reduce((sum, item) => sum + item.quantity, 0))
  );

  totalPrice$ = this.cartItems$.pipe(
    map(items => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0))
  );

  get items(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(product: Product): void {
    const currentItems = [...this.items];
    const existingIndex = currentItems.findIndex(i => i.product.id === product.id);

    if (existingIndex > -1) {
      currentItems[existingIndex] = {
        ...currentItems[existingIndex],
        quantity: currentItems[existingIndex].quantity + 1
      };
    } else {
      currentItems.push({ product, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.items.filter(i => i.product.id !== productId);
    this.cartItemsSubject.next(currentItems);
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}
