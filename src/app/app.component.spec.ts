import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have the design-system harness title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('Design-System Harness (Angular)');
  });
});
