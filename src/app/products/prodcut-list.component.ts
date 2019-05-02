import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
  implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  /*constructor(){
    this.filteredProducts=this.products;
    this._listFilter='cart';
  }*/
  // initializing service
  constructor(private productService: ProductService) {

  }

  products: IProduct[] = [];
  /*{
    "productId": 2,
    "productName": "abc",
    "imageUrl": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "productRating":3
  },
  {
    "productId": 5,
    "productName": "xyz",
    "imageUrl": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    "productRating":4
  }
]*/

  ToggelImages(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this._listFilter = 'cart';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List The rating is : ' + message;
  }

 
}