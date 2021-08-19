import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { CommonModule }           from '@angular/common';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'charts',
    loadChildren:()=>import('./charts/charts.module').then(mod=>mod.ChartsModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }