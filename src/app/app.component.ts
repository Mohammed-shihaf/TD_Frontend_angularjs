import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Tokens {
  color: { primary: string; danger: string; background: string };
  spacing: { sm: string; md: string; lg: string };
  typography: { fontFamily: string; baseSize: string };
}

// Design-System Test Harness: fetches the same /api/design-tokens the
// React frontend consumes (TD_Frontend_reactjs, same branch name);
// the two renders are parity-tested against each other.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Design-System Harness (Angular)';
  tokens: Tokens | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Tokens>('/api/design-tokens').subscribe({
      next: (data) => (this.tokens = data),
      error: () => {},
    });
  }
}
