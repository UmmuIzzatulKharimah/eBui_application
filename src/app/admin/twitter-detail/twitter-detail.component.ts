import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-twitter-detail',
  templateUrl: './twitter-detail.component.html',
  styleUrls: ['./twitter-detail.component.scss']
})
export class TwitterDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TwitterDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

  saveData(){
    if(this.data.id == undefined){
      this.api.create('twitter', this.data).subscribe(result=>{
      this.dialogRef.close(result);
    });
    }
    else{
      this.api.update(this.data.id,this.data,'twitter').subscribe(result=>{
      this.dialogRef.close(result);
       console.log(result);
      })
    }
  }


}
