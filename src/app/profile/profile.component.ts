import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url: string = "";
  //disabled: boolean = true;
  name:string;
  is_edit : boolean = false;
  updateUserDetails: User = new User();

  userDetails = this.appService.userDetails;

  constructor(private http: Http, private appService: AppService) {


  }

  ngOnInit() {
    console.log('Inside Profile inside ngOnIt');
    console.log(this.appService.userDetails);
  }

  edit() :
    boolean{
      return this.is_edit;
    }
  

  update() {
    console.log("" + JSON.stringify(this.updateUserDetails));
    var resp = this.appService.getDataFromServer(this.updateUserDetails);
    console.log("resp--->" + JSON.stringify(resp));
  }


  //getEmp(){


  //this.http.get("url?empId="+this.appService.userEmpId.empId+"").subscribe(response => {
  //console.log(response.json());

  //this.userDetails=response.json();




  //console.log(response);



  //});

  //}
}
