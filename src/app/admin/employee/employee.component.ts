import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  page = 1;
  count = 0;
  tableSize = 16;
  tableSizes = [3, 6, 9, 16];

  title: any;
  employee: any={};
  employees:any=[];

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
    this.api.get('employee').subscribe(result=>{
      this.employees=result;
    })
  }

  addEmployee(data,idx){
    let dialog = this.dialog.open(EmployeeDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //jika idx = -1 (penambahan data baru) maka tambahkan data 
        if(idx == -1) this.employees.push(res);
        //jika tidak maka perbarui data 
        else this.employees[idx]=data;
      }
    })
  }

  deleteEmployee(id,idx){
    var conf = confirm('Delete item?');
    if (conf){
        this.api.delete('employee/'+id).subscribe(res=>{
        this.employees.splice(idx,1);
      });
    }
  }

  onTableDataChange(event){
    this.page = event;
    this.getEmployee();
  }
  
  onTableSizeChange(event): void {
    this.tableSize = 16;
    this.page = 1;
    this.getEmployee();
  }  

}
