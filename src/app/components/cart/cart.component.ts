import { Component, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getProductsInCart(): ProductInCart[] {
    return this.cartService.getCart();
  }
}
