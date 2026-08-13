import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-portal-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-card">
      <h2>Customer Portal Authentication</h2>
      <p>Please log in to view your protected account profile.</p>
      <button (click)="onLogin()" class="login-btn">Simulate Customer Login</button>
    </div>
  `,
  styles: [`
    .login-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; background: #fafafa; max-width: 400px; }
    .login-btn { background: #2e7d32; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-size: 1rem; cursor: pointer; }
  `]
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  onLogin(): void {
    this.authService.login();
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';
    this.router.navigateByUrl(returnUrl);
  }
}
