import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DashboardDetailComponent } from '../dashboard-detail/dashboard-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: any;
  news: any={};
  newss:any=[];

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }
  
  ngOnInit(): void {
    
    this.getNews();
  }

  getNews(){
    this.api.get('news').subscribe(result=>{
      this.newss=result;
    })
  }

  addNews(data,idx){
    let dialog = this.dialog.open(DashboardDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //jika idx = -1 (penambahan data baru) maka tambahkan data 
        if(idx == -1) this.newss.push(res);
        //jika tidak maka perbarui data 
        else this.newss[idx]=data;
      }
    })
  }

  deleteNews(id,idx){
    var conf = confirm('Delete item?');
    if (conf){
        this.api.delete('news/'+id).subscribe(res=>{
        this.newss.splice(idx,1);
      });
    }
  }
}
