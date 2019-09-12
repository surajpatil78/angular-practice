import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/prodcut-list.component';
import { StarComponent } from './products/shared/star.component';
import { AlertModule } from 'ngx-bootstrap';

import { ProductDetailsComponent } from './products/product-detail.component';

import { RouterModule } from '@angular/router';
import {UserSettingsFormComponent} from './user-settings-form/user-settings-form.component';

import {HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import {LoginModule} from './login/login.module';
import {EmployeeLoginComponent} from './login/employee-login/employee-login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'productsdet/:id', component: ProductDetailsComponent },
    ]),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailsComponent,
    UserSettingsFormComponent,
    AddEmployeeComponent,
    EmployeeLoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
