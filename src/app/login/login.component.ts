import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }
  onLogin() {
    console.log("Login clicked");
    console.log("email && Password::"+this.email+" "+this.password);
    this.appService.login(this.email, this.password)
    }
    onRegistration() {
      console.log("Registration clicked");
      this.router.navigate(['signup']);
    }
  }


