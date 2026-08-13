import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portal-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="portal-card">
      <h2>Welcome to Customer Portal</h2>
      <p>Public portal landing page. Sign in to access your protected business account details.</p>
      <a routerLink="/account" class="btn">Go to My Account (Protected)</a>
    </div>
  `,
  styles: [`
    .portal-card { border: 1px solid #ddd; border-radius: 8px; padding: 24px; background: #fff; }
    .btn { display: inline-block; background: #1976d2; color: #fff; padding: 8px 16px; border-radius: 4px; text-decoration: none; margin-top: 12px; }
  `]
})
export class HomeComponent {}
