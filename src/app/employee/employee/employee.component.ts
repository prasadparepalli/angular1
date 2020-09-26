import { Component, OnInit } from '@angular/core';
// import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 // testEmp: Employee={
  //   age: 12,
  //   name: 'Emp1',
  //   email: 'i@i.d',
  //   salary: 24910,
  //   id: 1
  // }
  name: string = 'Abhijit';

  email: string = 'Abhijit@dnt.com';

  hidden: boolean = false;
  toggle() {
    this.hidden = !this.hidden;
  }
  constructor() { }

  ngOnInit() {
  }

}
