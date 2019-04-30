import { Injectable } from '@angular/core';
import { IProduct } from './product';
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        "productId": 2,
        "productName": "abc",
        "imageUrl": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        "productRating": 3
      },
      {
        "productId": 5,
        "productName": "xyz",
        "imageUrl": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        "productRating": 4
      }
    ];
  }
}