import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/prodcut-list.component';
import {StarComponent} from './products/shared/star.component';
import { AlertModule} from 'ngx-bootstrap';  

import {ProductDetailsComponent} from './products/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
