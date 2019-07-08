import { Component, OnInit } from '@angular/core';
import {ProductService} from "./service/product.service"
import { Product } from './product';

import { map,catchError,tap } from "rxjs/operators"; 
import { CartService } from '../cart/service/cart.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[]; 
  addedProduct: string;
  constructor(private productService:ProductService,
              private  cartService:CartService,
              private activatedRoute:ActivatedRoute
              ) {} 

  ngOnInit() {
    this.activatedRoute 
    this.activatedRoute.params.subscribe(params=>{
      console.log("seourl",params["seoUrl"]);
      this.getProduct(params["seoUrl"]);
    })  }

 getProduct(seoCategory:string){ 
    this.productService.getProducts(seoCategory).subscribe(response =>{
      this.products = response
      console.log(response);
    })
  }

  addToCard(product:Product){
    this.cartService.addToCart(product); 
    this.addedProduct = product.productName; 
  }

}
