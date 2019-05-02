import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/prodcut-list.component';
import { StarComponent } from './products/shared/star.component';
import { AlertModule } from 'ngx-bootstrap';

import { ProductDetailsComponent } from './products/product-detail.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'productsdet', component: ProductDetailsComponent },
    ])
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
