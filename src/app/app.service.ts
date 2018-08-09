import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './shared/user';
import { EmpAddress } from './emp-address';





@Injectable()
export class AppService {
    registrationURI: string = "http://192.168.2.57:8084/EmployeeDetails/account/registration";
    updateURI:string="http://192.168.2.57:8084/EmployeeDetails/account/update";
    loginURI: string = "http://192.168.2.57:8082/EmployeeDetails/account/login";

    userEmpId: User = new User;
    userDetails : User= new User;
    

    constructor(private http: Http, private router: Router) {
        this.userDetails.empAddress = new EmpAddress();
     }
     postUpdatetDataToServer(user){
        console.log(user);
        this.http.post(this.registrationURI, user).subscribe(response => {
            console.log(response.json());

            console.log(response);

            alert(response.json().statusMessage);
            return response;


        });

     }

    getDataFromServer(user) {
     

        console.log(user);
       // let demo = {
            //"name": user.name,
            //"gender": user.gender,
            //"mobileNo": user.mobileNo,
            //"email": user.email,
            //"password": user.password,
            //"birthday": user.birthday,
            //"joiningDay": user.joiningDay,
            //"maritalStatus": user.maritalStatus,
            //"employeeType": user.employeeType,
           // "empAddress":
           //     { "address": user.empAddress.address, "latitude": user.empAddress.latitude, "longitude": user.empAddress.longitude },

           // "designation": user.designation,
           // "qualification": user.qualification
        //}

        this.http.post(this.registrationURI, user).subscribe(response => {
            console.log(response.json());

            console.log(response);

            alert(response.json().statusMessage);
            return response;


        });
    }
    login(email: string, password: string) {
        let emp = {
            "email": email,
            "password": password
        }

        console.log(JSON.stringify(emp));
        this.http.post("http://192.168.2.57:8084/EmployeeDetails/account/login", emp).subscribe(
            response => {
                console.log(response.json());
                console.log(response);
                if (response.json().statusMessage == "Successfully logged in") {

                    console.log("login success");
                    this.userEmpId.empId = response.json().empId;
                    
                    console.log(this.userEmpId.empId);
                   
                    this.userEmpId.empId=response.json().empid;



                    this.http.get("http://192.168.2.57:8084/EmployeeDetails/account/update1 ?empId="+this.userEmpId.empId+"").subscribe(response => {
                    console.log('after get of login')   ;
                    console.log(response.json());
                      
                        this.userDetails=response.json();
                        console.log( this.userDetails);
                  
                        this.router.navigateByUrl('/profile');
                  
                        console.log(response);
                  
                       
                       
                      });
                  




                }
                else if (response.json().statusMessage == "Invalid Login data") {
                    console.log(" Invalid emailId/password");
                    alert('Invalid Login data');
                }
            });
            

    }
}




