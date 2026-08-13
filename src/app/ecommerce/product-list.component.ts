import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, Product } from './cart.service';

const MOCK_PRODUCTS: Product[] = [
  { id: 101, name: 'Pro Developer Laptop', price: 1499.99, description: 'High performance laptop for web engineers.', category: 'Electronics' },
  { id: 102, name: 'Noise-Canceling Headphones', price: 299.99, description: 'Wireless premium acoustic audio.', category: 'Audio' },
  { id: 103, name: 'Ergonomic Office Chair', price: 349.50, description: 'Lumbar support mesh seating.', category: 'Furniture' },
  { id: 104, name: 'Ultra-Wide 4K Monitor', price: 699.00, description: '34-inch color accurate display.', category: 'Electronics' }
];

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-catalog">
      <h2>Featured Store Catalog</h2>
      <div class="product-grid">
        <div *ngFor="let product of products" class="product-card">
          <h3>{{ product.name }}</h3>
          <p class="category">{{ product.category }}</p>
          <p class="desc">{{ product.description }}</p>
          <div class="product-footer">
            <span class="price">\${{ product.price.toFixed(2) }}</span>
            <button (click)="addToCart(product)" class="add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-catalog { margin-bottom: 24px; }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; margin-top: 12px; }
    .product-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; background: #fff; }
    .product-card h3 { margin: 0 0 4px; font-size: 1.1rem; }
    .category { color: #666; font-size: 0.85rem; margin: 0 0 8px; }
    .desc { font-size: 0.9rem; color: #444; min-height: 40px; }
    .product-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; }
    .price { font-weight: bold; color: #2e7d32; font-size: 1.1rem; }
    .add-btn { background: #1976d2; color: #fff; border: none; border-radius: 4px; padding: 6px 12px; cursor: pointer; }
  `]
})
export class ProductListComponent {
  products = MOCK_PRODUCTS;

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
