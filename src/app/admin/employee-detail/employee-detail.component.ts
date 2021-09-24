import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }

  saveData(){
    if(this.data.id == undefined){
      this.api.post('employee', this.data).subscribe(result=>{
      this.dialogRef.close(result);
    });
    }
    else{
      this.api.put('employee/'+this.data.id,this.data).subscribe(result=>{
      this.dialogRef.close(result);
       console.log(result);
      })
    }
  }


}
