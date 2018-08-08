import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from './shared/user.service';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
