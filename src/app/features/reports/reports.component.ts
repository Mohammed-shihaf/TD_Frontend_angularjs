import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div class="feature-card">
      <h2>Enterprise Reports & Analytics</h2>
      <p>Lazy-loaded feature module: ReportsModule</p>
      <ul>
        <li>Monthly Audit Log</li>
        <li>Compliance & Governance Report</li>
        <li>Resource Allocation Analysis</li>
      </ul>
    </div>
  `
})
export class ReportsComponent {}
