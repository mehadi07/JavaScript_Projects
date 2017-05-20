import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import{ ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    // used moduleId to remove absolute path from the url  app/products/product-list.component.html
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 60;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string ;
    products: IProduct[];
    
    constructor(private _productService: ProductService){
        
    }
    
    toggleImage (): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }
    
    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}
