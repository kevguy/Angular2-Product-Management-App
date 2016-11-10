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
    errorMessage: string;
    ngOnInit(): void {
        console.log('In Oninit');
        this._productService.getProducts()
                .subscribe(
                    products => this.products = products,
                    error => this.errorMessage = <any>error);
    };
    onRatingClicked(message: string): void {this.pageTitle = 'Product list ' + message;};
    products: IProduct[];
}