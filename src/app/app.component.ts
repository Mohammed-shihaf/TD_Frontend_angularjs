import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Tenant {
  tier: string;
  brand: string;
  primaryColor: string;
}

// White-Label Storefront: Angular serves ENTERPRISE tenants only.
// Self-serve tenants get the React storefront instead
// (TD_Frontend_reactjs, same branch name).
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'White-Label Storefront (Angular, enterprise)';
  tenant: Tenant | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Tenant>('/api/tenant-config', { headers: { 'x-tenant-id': 'globex' } })
      .subscribe({
        next: (data) => (this.tenant = data),
        error: () => {},
      });
  }
}
