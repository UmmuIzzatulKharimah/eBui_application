import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fitur:any=
  {
   name : 'Dashboard'
  }
  

  menu=[
  
    {
      name:'Dashoard',
      icon:'dashboard',
      url:'/admin/home'
    },
    {
      name:'News',
      icon:'article',
      url:'/admin/dashboard'
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
