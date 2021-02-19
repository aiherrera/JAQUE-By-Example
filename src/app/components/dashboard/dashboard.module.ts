import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DarkModeSwitcherComponent } from '../dark-mode-switcher/dark-mode-switcher.component';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/shared/material.module';

const routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  declarations: [
    DashboardComponent,
    ListUsersComponent,
    ToolbarComponent,
    DarkModeSwitcherComponent,
    HamburgerComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
