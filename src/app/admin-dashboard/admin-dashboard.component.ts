import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

export interface UserElement {
  id: number;
  name: string;
  role: string;
  status: string;
  lastActive: string;
}

const MOCK_USERS: UserElement[] = [
  { id: 1, name: 'Alice Smith', role: 'Administrator', status: 'Active', lastActive: '2 mins ago' },
  { id: 2, name: 'Bob Johnson', role: 'Editor', status: 'Active', lastActive: '10 mins ago' },
  { id: 3, name: 'Carol White', role: 'Viewer', status: 'Inactive', lastActive: '2 days ago' },
  { id: 4, name: 'David Brown', role: 'Developer', status: 'Active', lastActive: '1 hour ago' },
  { id: 5, name: 'Eva Green', role: 'Analyst', status: 'Active', lastActive: 'Just now' }
];

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ],
  template: `
    <mat-toolbar color="primary" class="admin-toolbar">
      <span>Admin Dashboard Shell</span>
      <span class="toolbar-spacer"></span>
      <button mat-button>Logout</button>
    </mat-toolbar>

    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" opened class="admin-sidenav">
        <div class="sidenav-nav">
          <button mat-button class="nav-item">Overview</button>
          <button mat-button class="nav-item">User Management</button>
          <button mat-button class="nav-item">System Logs</button>
          <button mat-button class="nav-item">Settings</button>
        </div>
      </mat-sidenav>

      <mat-sidenav-content class="main-content">
        <div class="dashboard-body">
          <mat-card class="metrics-card">
            <mat-card-header>
              <mat-card-title>System User Management</mat-card-title>
              <mat-card-subtitle>Angular Material Data Table with Mock Data</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content class="card-table-content">
              <table mat-table [dataSource]="dataSource" class="mat-elevation-z1 users-table">
                <ng-container matColumnDef="id">
                  <th mat-header-cell *matHeaderCellDef> ID </th>
                  <td mat-cell *matCellDef="let element"> {{element.id}} </td>
                </ng-container>

                <ng-container matColumnDef="name">
                  <th mat-header-cell *matHeaderCellDef> Name </th>
                  <td mat-cell *matCellDef="let element"> {{element.name}} </td>
                </ng-container>

                <ng-container matColumnDef="role">
                  <th mat-header-cell *matHeaderCellDef> Role </th>
                  <td mat-cell *matCellDef="let element"> {{element.role}} </td>
                </ng-container>

                <ng-container matColumnDef="status">
                  <th mat-header-cell *matHeaderCellDef> Status </th>
                  <td mat-cell *matCellDef="let element"> {{element.status}} </td>
                </ng-container>

                <ng-container matColumnDef="lastActive">
                  <th mat-header-cell *matHeaderCellDef> Last Active </th>
                  <td mat-cell *matCellDef="let element"> {{element.lastActive}} </td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
              </table>
            </mat-card-content>
          </mat-card>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .toolbar-spacer { flex: 1 1 auto; }
    .sidenav-container { height: calc(100vh - 64px); }
    .admin-sidenav { width: 220px; background: #f5f5f5; padding-top: 16px; }
    .nav-item { display: block; width: 100%; text-align: left; margin-bottom: 8px; }
    .main-content { padding: 24px; background: #fafafa; }
    .metrics-card { margin-top: 12px; }
    .card-table-content { margin-top: 16px; }
    .users-table { width: 100%; }
  `]
})
export class AdminDashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'role', 'status', 'lastActive'];
  dataSource = MOCK_USERS;
}
