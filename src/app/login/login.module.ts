import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeeLoginComponent],
  exports:[
    EmployeeLoginComponent
  ]
})
export class LoginModule { }