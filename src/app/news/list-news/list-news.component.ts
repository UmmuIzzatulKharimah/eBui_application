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

  // title: any;
  // news: any={};
  // newss:any=[];
  newsControllers: any=[];
  currentTutorial = null;
  currentIndex = -1;
  title_news = '';

  page = 1;
  count = 0;
  tableSize = 9;
  tableSizes = [3, 6, 9, 12];

  // tutorial = {
  //   title_news: '',
  //   media_name: '',
  //   description: '',
  //   category: '',
  //   date: '',
  //   content_text: '',
  //   link_image: ''
  // };
  

  // tutorials: any;
  // currentTutorial = null;
  // currentIndex = -1;
  // title = '';

  // page = 1;
  // count = 0;
  // pageSize = 3;
  // pageSizes = [3, 6, 9];

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    // this.getNews();
    this.retrieveTutorials();
  }

  // getNews(){
  //   this.api.get('news').subscribe(result=>{
  //     this.newss=result;
  //   })
  // }

  getRequestParams(searchTitle, page, tableSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchTitle) {
      params[`title_news`] = searchTitle;
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
    const params = this.getRequestParams(this.title_news, this.page, this.tableSize);

    this.api.getAll(params,'news')
      .subscribe(
        response => {
          const { newsControllers, totalItems } = response;
          this.newsControllers = newsControllers;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  addNews(data,idx){
    let dialog = this.dialog.open(DashboardDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //jika idx = -1 (penambahan data baru) maka tambahkan data 
        if(idx == -1) this.newsControllers.push(res);
        //jika tidak maka perbarui data 
        else this.newsControllers[idx]=data;
      }
    })
  }

  // saveTutorial(data,idx): void {
  //   // const data = {
  //   //   title_news: this.tutorial.title_news,
  //   //   media_name: this.tutorial.media_name,
  //   //   description: this.tutorial.description,
  //   //   category: this.tutorial.category,
  //   //   date: this.tutorial.date,
  //   //   content_text: this.tutorial.content_text,
  //   //   link_image: this.tutorial.link_image
  //   // };

  //   let dialog = this.dialog.open(DashboardDetailComponent, {
  //         width: '400px',
  //         data: data
  //       });
  //   dialog.afterClosed().subscribe(res=>{
  //     if(res){
  //       //jika idx = -1 (penambahan data baru) maka tambahkan data 
  //       if(idx == -1) this.newsControllers.push(res);
  //       //jika tidak maka perbarui data 
  //       else this.newsControllers[idx]=data;
  //       }
  //   })

  //   this.api.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newTutorial(): void {
  //   this.submitted = false;
  //   this.tutorial = {
  //     title_news: '',
  //     media_name: '',
  //     description: '',
  //     category: '',
  //     date: '',
  //     content_text: '',
  //     link_image: ''
  //   };
  // }

  deleteNews(id,idx){
    var conf = confirm('Delete item?');
    if (conf){
        this.api.delete('news/'+id).subscribe(res=>{ 
        this.newsControllers.splice(idx,1);
      });
    }
  }

  onTableDataChange(event){
    this.page = event;
    // this.getNews();
    this.retrieveTutorials();
  }  

  onTableSizeChange(event): void {
    this.tableSize = 9;
    this.page = 1;
    // this.getNews();
    this.retrieveTutorials();
  }  

}
