import {Component} from '@angular/core';
@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 80;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'Cart';
    products: any[] = [
    {
        'productId': 1,
        'productName': "Leaf Rake",
        'productCode': "GDN-0011",
        'releaseDate': "March 19, 2016",
        'description': "Leaf rake with 48-inch wooden handle.",
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
    ];
    
    toggleImage (): void {
        this.showImage = !this.showImage;
    }
}
