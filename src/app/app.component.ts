import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Widget {
  id: number;
  label: string;
}

// Migration Bridge: this is the LEGACY app, served at /legacy in the
// connected repo's route-split backend (TD_Backend_nodejs's
// migrationbridge branches). /app/* serves the new React app instead.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Legacy App (Angular) — served at /legacy';
  widgets: Widget[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ widgets: Widget[] }>('/api/widgets').subscribe({
      next: (data) => (this.widgets = data.widgets),
      error: () => (this.widgets = []),
    });
  }
}
