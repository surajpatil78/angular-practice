import { Component } from '@angular/core';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth:number=50;
  products: any[] = [
    {
      "productId": 2,
      "productName": "abc",
      "imageUrl": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
    },
    {
      "productId": 5,
      "productName": "xyz",
      "imageUrl": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
    }
  ]
}