import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import {Router} from '@angular/router';
import {User} from './shared/user';




@Injectable()
export class AppService {
    registrationURI: string="http://192.168.2.57:8082/EmployeeDetails/account/registration";
    
    loginURI: string = "http://192.168.2.57:8082/EmployeeDetails/account/login";
    
    userEmpId:User = new User ;

constructor(private http:Http,private router:Router) { }

getDataFromServer(user){
    console.log(user);
    let demo = {
        "name" : user.name,
        "gender" : user.gender,
        "mobileNo" : user.mobileNo,
        "email" : user.email,
        "password" : user.password,
        "birthday" : user.birthday,
        "joiningDay" : user.joiningDay,
        "maritalStatus" : user.maritalStatus,
        "employeeType" : user.employeeType,
        "empAddress":[user.empAddress.address,user.empAddress.latitude,user.empAddress.longitude],
        "designation" : user.designation,
        "qualification" : user.qualification
                }

    this.http.post(this.registrationURI, demo).subscribe(response => {
        console.log(response.json());
  
        console.log(response);
  
        alert(response.json().statusMessage);
        return response;
       
       
      });
}
login(email: string, password: string)
{
    let emp={
    "emailId":email,
      "password":password
     }

      console.log(JSON.stringify(emp));
      this.http.post("http://localhost:8080/EmployeeDetails/account/login" ,emp).subscribe(
      response =>
    {
        console.log(response.json() );
        console.log(response);
        if(response.json().statusMessage=="Login Success")
        {
          
             console.log("login success");
             this.userEmpId.empId = response.json().empId;
             console.log(this.userEmpId.empId);
             this.router.navigate(['profile']);
            
        }
        else  if(response.json().statusMessage=="Invalid emailId/password")
        {
            console.log(" Invalid emailId/password");
        }
    });
}
}  


    
  
