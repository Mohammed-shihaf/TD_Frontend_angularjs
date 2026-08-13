import { Routes } from '@angular/router';
import { HomeComponent } from './portal/home.component';
import { LoginComponent } from './portal/login.component';
import { AccountComponent } from './portal/account.component';
import { authGuard } from './portal/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [authGuard] }
];
