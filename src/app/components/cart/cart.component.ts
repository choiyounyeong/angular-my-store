import { Component, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {}

  getProductsInCart(): ProductInCart[] {
    return this.cartService.getCart();
  }

  checkoutSuccess(): void {
    this.cartService.clearCart();
    const totalPrice = '100';
    this.route.navigateByUrl(`confirm/${this.userName}/${totalPrice}`);
  }
}
