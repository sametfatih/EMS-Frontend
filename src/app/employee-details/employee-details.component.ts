import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number=0;
  employee!:Employee;

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.employee=new Employee();

    this.employeeService.getEmployeeById(this.id).subscribe((data:Employee)=>{
      this.employee=data;
      console.log(this.employee);
    },
    (e)=>console.error(e),
    ()=>console.log("complete")
    );
  }

}
