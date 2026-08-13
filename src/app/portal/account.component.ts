import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-portal-account',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="account-card">
      <h2>My Account Profile (Protected Area)</h2>
      <p class="badge">Status: Authenticated Customer</p>
      <div class="details">
        <p><strong>Account ID:</strong> CUST-98421</p>
        <p><strong>Company:</strong> Acme Global Logistics</p>
        <p><strong>Plan Tier:</strong> Enterprise Portal Pass</p>
        <p><strong>Support Contact:</strong> portal-support&#64;acme.com</p>
      </div>
      <button (click)="onLogout()" class="logout-btn">Sign Out</button>
    </div>
  `,
  styles: [`
    .account-card { border: 2px solid #2e7d32; border-radius: 8px; padding: 24px; background: #f1f8e9; }
    .badge { display: inline-block; background: #2e7d32; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.85rem; }
    .details { margin: 16px 0; font-size: 0.95rem; }
    .logout-btn { background: #c62828; color: #fff; border: none; border-radius: 4px; padding: 8px 16px; cursor: pointer; }
  `]
})
export class AccountComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
