import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { enableProdMode } from '@angular/core';

enableProdMode();
// enabled it by importing and executing the function (before calling bootstrap)



import { AppComponent }  from './app.component';

import { ProductListComponent } from './products/product-list.component';

import {ProductFilterPipe} from './products/product-filter.pipe';

import {StarComponent} from './shared/star.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
