import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { CommonModule }           from '@angular/common';
import { ListNewsComponent }  from './list-news/list-news.component';
import { AddNewsComponent }   from './add-news/add-news.component';
import { EditNewsComponent }  from './edit-news/edit-news.component';

const appRoutes: Routes = [
  { path: 'list-news', component:  ListNewsComponent},
  { path: 'add-news',  component:  AddNewsComponent},
  { path: 'edit-news/:id',  component:  EditNewsComponent},
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)
  },
  {
    path:'charts',
    loadChildren:()=>import('./charts/charts.module').then(mod=>mod.ChartsModule)
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