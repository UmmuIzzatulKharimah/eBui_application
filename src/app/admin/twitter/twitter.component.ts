import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

import { TwitterDetailComponent } from '../twitter-detail/twitter-detail.component';



@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  title: any;
  twitter: any={};
  twitters:any=[];

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.getTwitter();
  }

  getTwitter(){
    this.api.get('twitter').subscribe(result=>{
      this.twitters=result;
    })
  }

  addTwitter(data,idx){
    let dialog = this.dialog.open(TwitterDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //jika idx = -1 (penambahan data baru) maka tambahkan data 
        if(idx == -1) this.twitters.push(res);
        //jika tidak maka perbarui data 
        else this.twitters[idx]=data;
      }
    })
  }

  deleteTwitter(id,idx){
    var conf = confirm('Delete item?');
    if (conf){
        this.api.delete('twitter/'+id).subscribe(res=>{
        this.twitters.splice(idx,1);
      });
    }
  }

  onTableDataChange(event){
    this.page = event;
    this.getTwitter();
  }
  
  onTableSizeChange(event): void {
    this.tableSize = 8
    this.page = 1;
    this.getTwitter();
  }  

}
