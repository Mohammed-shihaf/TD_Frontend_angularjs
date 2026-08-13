import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Progressive Web Application (PWA)';
  swUpdate = inject(SwUpdate, { optional: true });
  isSwEnabled = this.swUpdate?.isEnabled ?? false;
}
