import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

import { ProductService } from './product.service';



@Component({
    selector: 'pm-products',
    moduleId: module.id, 
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    constructor(private _productService: ProductService){

    };
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    toggleImage(): void { this.showImage = !this.showImage; };
    listFilter: string = 'cart';
    ngOnInit(): void {
        console.log('In Oninit');
        this.products = this._productService.getProducts();
    };
    onRatingClicked(message: string): void {this.pageTitle = 'Product list ' + message;};
    products: IProduct[];
}