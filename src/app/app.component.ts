import { Component } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';

  menu=[
  
    {
      name:'Dashoard',
      icon:'dashboard',
      url:'/admin/home'
    },
    {
      name:'News',
      icon:'article',
      url:'/news/list-news'
    },
    {
      name:'Employee',
      icon:'account_balance_wallet',
      url:'/admin/employee'
    },
    {
      name:'Twitter',
      icon:'chat',
      url:'/admin/twitter'
    }
  ];

  settings=[
    {
      name:'Settings',
      icon:'settings',
      url:''
    },
    {
      name:'Info',
      icon:'info',
      url:''
    }
  ];

}
