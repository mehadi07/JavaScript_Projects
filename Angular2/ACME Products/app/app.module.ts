import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { enableProdMode } from '@angular/core';

enableProdMode();
// enabled it by importing and executing the function (before calling bootstrap)



import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';

import {ProductFilterPipe} from './products/product-filter.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
