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

  employeeControllers: any=[];
  currentTutorial = null;
  currentIndex = -1;
  first_name = '';

  page = 1;
  count = 0;
  tableSize = 16;
  tableSizes = [3, 6, 9, 16];

  // title: any;
  // employee: any={};
  // employees:any=[];

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    // this.getEmployee();
    this.retrieveTutorials();
  }

  // getEmployee(){
  //   this.api.get('employee').subscribe(result=>{
  //     this.employees=result;
  //   })
  // }

  getRequestParams(searchTitle, page, tableSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchTitle) {
      params[`first_name`] = searchTitle;
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
    const params = this.getRequestParams(this.first_name, this.page, this.tableSize);

    this.api.getAll(params,'employee')
      .subscribe(
        response => {
          const { employeeControllers, totalItems } = response;
          this.employeeControllers = employeeControllers;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  addEmployee(data,idx){
    let dialog = this.dialog.open(EmployeeDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res){
        //jika idx = -1 (penambahan data baru) maka tambahkan data 
        if(idx == -1) this.employeeControllers.push(res);
        //jika tidak maka perbarui data 
        else this.employeeControllers[idx]=data;
      }
    })
  }

  deleteEmployee(id,idx){
    var conf = confirm('Delete item?');
    if (conf){
        this.api.delete('employee/'+id).subscribe(res=>{
        this.employeeControllers.splice(idx,1);
      });
    }
  }

  onTableDataChange(event){
    this.page = event;
    // this.getEmployee();
    this.retrieveTutorials();
  }
  
  onTableSizeChange(event): void {
    this.tableSize = 16;
    this.page = 1;
    // this.getEmployee();
    this.retrieveTutorials();
  }  

}
