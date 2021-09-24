import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DashboardDetailComponent } from 'src/app/admin/dashboard-detail/dashboard-detail.component';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  page = 1;
  count = 0;
  tableSize = 9;
  tableSizes = [3, 6, 9, 12];

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

  onTableDataChange(event){
    this.page = event;
    this.getNews();
  }  

  onTableSizeChange(event): void {
    this.tableSize = 9;
    this.page = 1;
    this.getNews();
  }  

}
