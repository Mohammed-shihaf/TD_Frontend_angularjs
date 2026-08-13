import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-summary-box">
      <h2>Shopping Cart</h2>
      <div *ngIf="(items$ | async)?.length === 0" class="empty-cart">
        Your cart is currently empty.
      </div>

      <div *ngIf="(items$ | async) as items">
        <div *ngIf="items.length > 0">
          <ul class="cart-list">
            <li *ngFor="let item of items" class="cart-item">
              <span><strong>{{ item.product.name }}</strong> (x{{ item.quantity }})</span>
              <span>\${{ (item.product.price * item.quantity).toFixed(2) }}</span>
              <button (click)="removeItem(item.product.id)" class="remove-btn">Remove</button>
            </li>
          </ul>
          <div class="cart-totals">
            <p>Total Items: <strong>{{ totalItems$ | async }}</strong></p>
            <p class="total-price">Order Total: <strong>\${{ (totalPrice$ | async)?.toFixed(2) }}</strong></p>
            <button (click)="clearCart()" class="clear-btn">Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cart-summary-box { border: 1px solid #ccc; border-radius: 8px; padding: 16px; background: #fafafa; }
    .empty-cart { color: #888; font-style: italic; }
    .cart-list { list-style: none; padding: 0; margin: 0 0 16px; }
    .cart-item { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px dashed #ddd; }
    .remove-btn { background: #d32f2f; color: #fff; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; margin-left: 8px; }
    .cart-totals { text-align: right; margin-top: 12px; }
    .total-price { font-size: 1.2rem; color: #2e7d32; }
    .clear-btn { background: #757575; color: #fff; border: none; border-radius: 4px; padding: 6px 12px; cursor: pointer; }
  `]
})
export class CartComponent {
  private cartService = inject(CartService);

  items$ = this.cartService.cartItems$;
  totalItems$ = this.cartService.totalItems$;
  totalPrice$ = this.cartService.totalPrice$;

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
