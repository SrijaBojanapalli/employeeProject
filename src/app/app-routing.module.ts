import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import{ SignUpComponent } from './sign-up/sign-up.component';
import{LoginComponent} from './login/login.component';
import {EmployeeRegistrationComponent} from './employee-registration/employee-registration.component';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        
          path:"",
          component:AppComponent
        
      },
      {
        
        path:"employeeRegistration",
        component:EmployeeRegistrationComponent
      
    },
    {
        
      path:"signup",
      component:SignUpComponent
    
  },
  {
        
    path:"login",
    component:LoginComponent
  
},
{
        
  path:"profile",
  component:ProfileComponent

},
    
      

    ])
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
