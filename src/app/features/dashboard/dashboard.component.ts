import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="feature-card">
      <h2>Enterprise Executive Dashboard</h2>
      <p>Lazy-loaded feature module: DashboardModule</p>
      <ul>
        <li>Active Users: 12,450</li>
        <li>System Health: 99.98%</li>
        <li>Quarterly Revenue: $1.2M</li>
      </ul>
    </div>
  `
})
export class DashboardComponent {}
