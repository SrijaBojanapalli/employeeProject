import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';





@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  url: string="http://192.168.2.57:8082/EmployeeDetails/account/registration";
  user:User = new User();
constructor(private appService:AppService){}
  ngOnInit() {
    this.employee();
  }
 employee(){
  //  let emp = {
  //   "id":this.user.id,
  //   "name":this.user.name,
  //   "gender":this.user.gender,
  //   "mobileNo":this.user.mobileNo,
  //   "email":this.user.email,
    
  //   "birthday":this.user.birthday,
  //   "joiningDay":this.user.joiningDay,
  //   "martialStatus":this.user.martialStatus,
  //   "employeeType":this.user.employeeType,
  //   "address":this.user.address,
  //   "designation":this.user.designation,
  //   "qualification":this.user.qualification
  //   };
    console.log(""+JSON.stringify(this.user));
    var resp = this.appService.getDataFromServer(this.user);
    console.log("resp--->"+JSON.stringify(resp));
  }
 }
 

