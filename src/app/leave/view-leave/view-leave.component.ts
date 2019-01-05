import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';
import { Leave } from 'src/app/models/leave';
import { Employee } from 'src/app/models/employee';
import { AppError } from 'src/app/models/appError';

@Component({
  selector: 'view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private router: Router, private leaveSvc: LeaveService) { }

  ngOnInit() {
    this.viewLeave('');
  }

  applyLeave() {
    this.router.navigateByUrl('/applyLeave');
  }

  //View Leave
  viewLeave = (id: string) => {
    this.leaveSvc.viewLeave(id).subscribe((res:Employee) => {
      this.employee = res;
    }, (err: AppError) => {
      console.log(err);
    });
  }
}
