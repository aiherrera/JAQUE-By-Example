import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DarkModeSwitcherComponent } from '../dark-mode-switcher/dark-mode-switcher.component';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/shared/material.module';
import { AuthGuard } from 'src/shared/guards/auth.guard';

const routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/list-users', pathMatch: 'full' },
      { path: 'list-users', loadChildren: () => import('../list-users/list-users.module').then(m => m.ListUsersModule), canActivate: [AuthGuard] },
      { path: 'lineal-graphic', loadChildren: () => import('../lineal-graphic/lineal-graphic.module').then(m => m.LinealGraphicModule), canActivate: [AuthGuard] },
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    DarkModeSwitcherComponent,
    HamburgerComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
