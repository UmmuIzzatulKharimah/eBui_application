import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { CommonModule }           from '@angular/common';

const appRoutes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/admin/home'
  },
  {
    path:'charts',
    loadChildren:()=>import('./charts/charts.module').then(mod=>mod.ChartsModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'news',
    loadChildren:()=>import('./news/news.module').then(mod=>mod.NewsModule)
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