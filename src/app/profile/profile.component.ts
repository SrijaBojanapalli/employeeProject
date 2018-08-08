import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import { AppService } from '../app.service';;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url: string="";
  userDetails :User = new User;

  constructor(private http:Http,private appService:AppService) { }

  ngOnInit() {
  }
  getEmp(){

    this.http.get("url?empId="+this.appService.userEmpId.empId+"").subscribe(response => {
      console.log(response.json());
    
      this.userDetails.empId=response.json().empId;
      



      console.log(response);

     
     
    });

}
}
