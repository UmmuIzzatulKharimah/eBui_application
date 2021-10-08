import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})

export class DashboardDetailComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<DashboardDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }
  
  saveData(){
    if(this.data.id == undefined){
      this.api.create('news', this.data).subscribe(result=>{
      this.dialogRef.close(result);
    });
    }
    else{
      this.api.update(this.data.id,this.data,'news').subscribe(result=>{
      this.dialogRef.close(result);
       console.log(result);
      })
    }
  }
  

}
