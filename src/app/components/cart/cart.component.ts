import { Component, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { PurchaseInfo } from 'src/app/models/customer-info';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  purchaseInfo: PurchaseInfo = {
    userName: '',
    address: '',
    creditCard: '',
    totalPrice: 0,
  };

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.updateTotalPrice();
  }

  quantityChanged(): void {
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.purchaseInfo.totalPrice = 0;
    const products = this.getProductsInCart();
    products.forEach((p) => {
      this.purchaseInfo.totalPrice += p.price * p.quantity;
    });
  }

  getProductsInCart(): ProductInCart[] {
    return this.cartService.getCart();
  }

  removeProduct(productId: string): void {
    this.cartService.removeFromCart(productId);
    this.updateTotalPrice();
  }

  checkoutSuccess(): void {
    this.cartService.clearCart();
    this.cartService.saveCustomerOrder({ ...this.purchaseInfo });
    this.purchaseInfo = {
      userName: '',
      address: '',
      creditCard: '',
      totalPrice: 0,
    };
    this.route.navigateByUrl('confirm');
  }
}
