import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinealGraphicComponent } from './lineal-graphic.component';
import { MaterialModule } from 'src/shared/material.module';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

const routes = [
  { path: '', component: LinealGraphicComponent, outlet: 'dashboard' }
]

@NgModule({
  declarations: [LinealGraphicComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ChartsModule
  ]
})
export class LinealGraphicModule { }
