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
import { LoginComponent } from './login/login.component';
import { AccountService } from './login/service/account.service';


@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      CartSummaryComponent,
      KdvPipe,
      FilterPipe,
      CategoryComponent,
      CartComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      FormsModule
   ],
   providers: [
      {
         provide: 'apiUrl',
         useValue: "http://northwindapi.azurewebsites.net/api"
       },
      CartService,
      AccountService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
