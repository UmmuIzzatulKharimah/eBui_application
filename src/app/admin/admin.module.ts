import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HomeComponent } from './home/home.component';
import { TwitterComponent } from './twitter/twitter.component';
import { TwitterDetailComponent } from './twitter-detail/twitter-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes=[
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard-detail',
        component:DashboardDetailComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'employee',
        component:EmployeeComponent
      },
      {
        path:'twitter',
        component:TwitterComponent
      }
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, DashboardDetailComponent, EmployeeComponent, EmployeeDetailComponent, HomeComponent, TwitterComponent, TwitterDetailComponent],
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
    MatTableModule,
    MDBBootstrapModule.forRoot()
  ],
  bootstrap: []
})
export class AdminModule { }
