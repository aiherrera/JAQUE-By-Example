import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/shared/material.module';

const routes = [
  { path: '', component: ListUsersComponent, outlet: 'dashboard' }
]

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ListUsersModule { }
