import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Widget {
  id: number;
  label: string;
}

// Micro-Frontend remote: in the connected TD_Microfrontend repo, this
// build output is embedded live into the React shell via
// <iframe src="/angular-remote/">. That React shell isn't present in
// this single-technology repo (see TD_Frontend_reactjs's
// microfrontend_reactjs<version> branches for the shell itself).
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Micro-Frontend Remote (Angular) — standalone';
  widgets: Widget[] = [{ id: 1, label: 'Standalone Angular widget' }];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ widgets: Widget[] }>('/api/widgets').subscribe({
      next: (data) => (this.widgets = data.widgets),
      error: () => {},
    });
  }
}
