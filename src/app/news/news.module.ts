import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

const routes: Routes=[
  {
    path:'',
    component:NewsComponent,
    children:[
      {
        path:'list-news',
        component:ListNewsComponent
      },
      {
        path:'add-news',
        component:AddNewsComponent
      },
      {
        path:'',
        redirectTo:'/news/list-news',
        pathMatch:'full'

      }
    ]
  }
]

@NgModule({
  declarations: [NewsComponent, ListNewsComponent, AddNewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
 
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule
  ],
  // bootstrap: []
})
export class NewsModule { }
