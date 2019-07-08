import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartService } from "./cart/service/cart.service";
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { KdvPipe } from './product/pipe/kdv.pipe';
import { FormsModule } from "@angular/forms";
import { FilterPipe } from './product/pipe/filter.pipe';
import { CategoryComponent } from './category/category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';


@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      CartSummaryComponent,
      KdvPipe,
      FilterPipe,
      CategoryComponent,
      CartComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      FormsModule,
    
   ],
   providers: [
      {
        provide: 'apiUrl',
        useValue: "http://northwindapi.azurewebsites.net/api"
      },CartService
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
