import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './ecommerce/product-list.component';
import { CartComponent } from './ecommerce/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce Storefront Application';
}
