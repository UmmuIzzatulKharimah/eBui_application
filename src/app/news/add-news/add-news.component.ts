import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {


  newsCategory: string;
  categories: string[] = ['Business', 'Education', 'Sport', 'Lifestyle', 'Politics'];

  news:any=[];
  submitted = false;

  selectFile(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.news.link_image = event.target.result
      }
    }
  }

  constructor(
    private api:ApiService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    
    // this.createNewsFromService();
  }

 

  clearData():void{
    this.news.title_news = '';
    this.news.content_text = '';
    this.news.media_name = '';
    this.news.date = '';
    this.newsCategory = '';
    this.news.description = '';
    this.news.link_image = '';
  }
  saveData():void{
    const data = {
      id: this.news.id,
      title_news: this.news.title_news,
      content_text:this.news.content_text,
      media_name: this.news.media_name,
      date: this.news.date,
      category:this.newsCategory,
      description: this.news.description,
      link_image:this.news.link_image
      
    };
  
    this.api.create('news', data).subscribe(result=>{
      this.news=result;
      this.submitted=true;
    })
  }
  onSubmit(){
    this.submitted=true;
  }
}

