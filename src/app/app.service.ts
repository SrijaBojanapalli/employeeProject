import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';


@Injectable()
export class AppService {
    url: string="http://192.168.2.57:8082/EmployeeDetails/account/registration";
constructor(private http:Http) { }

getDataFromServer(user){
    this.http.post(this.url, user).subscribe(response => {
        console.log(response.json());
  
        console.log(response);
  
        alert(response.json().statusMessage);
        return response;
       
       
      });
}
  
}