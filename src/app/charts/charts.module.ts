import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[
  {
    path:'',
    component:ChartsComponent,
    children:[
      {
        path:'bar-chart',
        component:BarChartComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ChartsComponent, BarChartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class ChartsModule { }
