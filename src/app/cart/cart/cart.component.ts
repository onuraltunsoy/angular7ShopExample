import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CartItem } from '../cart-item';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService : CartService) { }
  isProductRemoved: boolean = false; 
  cartItems: CartItem[] = [];
  ngOnInit() {
    this.cartItems = this.cartService.list();
  }
  removeFromCart(product: Product) { 
    if (confirm("Emin misiniz ?")) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
}
