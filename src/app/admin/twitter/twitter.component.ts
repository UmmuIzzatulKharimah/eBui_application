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

  twitterControllers: any=[];
  currentTutorial = null;
  currentIndex = -1;
  name = '';

  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  // title: any;
  // twitter: any={};
  // twitters:any=[];

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    // this.getTwitter();
    this.retrieveTutorials();
  }

  // getTwitter(){
  //   this.api.get('twitter').subscribe(result=>{
  //     this.twitters=result;
  //   })
  // }

  getRequestParams(searchTitle, page, tableSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchTitle) {
      params[`name`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (tableSize) {
      params[`size`] = tableSize;
    }

    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.name, this.page, this.tableSize);

    this.api.getAll(params,'twitter')
      .subscribe(
        response => {
          const { twitterControllers, totalItems } = response;
          this.twitterControllers = twitterControllers;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  addTwitter(data,idx){
    let dialog = this.dialog.open(TwitterDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //jika idx = -1 (penambahan data baru) maka tambahkan data 
        if(idx == -1) this.twitterControllers.push(res);
        //jika tidak maka perbarui data 
        else this.twitterControllers[idx]=data;
      }
    })
  }

  deleteTwitter(id,idx){
    var conf = confirm('Delete item?');
    if (conf){
        this.api.delete('twitter/'+id).subscribe(res=>{
        this.twitterControllers.splice(idx,1);
      });
    }
  }

  onTableDataChange(event){
    this.page = event;
    // this.getTwitter();
    this.retrieveTutorials();
  }
  
  onTableSizeChange(event): void {
    this.tableSize = 8
    this.page = 1;
    // this.getTwitter();
    this.retrieveTutorials();
  }  

}
