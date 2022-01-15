import { Component, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { PurchaseInfo } from 'src/app/models/customer-info';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  nameInvalidMessage: string = '';
  addressInvalidMessage: string = '';
  cardInvalidMessage: string = '';

  purchaseInfo: PurchaseInfo = {
    userName: '',
    address: '',
    creditCard: '',
    totalPrice: 0,
  };

  constructor(
    private cartService: CartService,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.updateTotalPrice();
  }

  quantityChanged(product: ProductInCart): void {
    this.updateTotalPrice();
    this.snackBar.open(`The quantity of ${product.name} is changed`, '!', {
      duration: 2500,
      horizontalPosition: 'center',
    });
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

  validateName(): void {
    if (!this.purchaseInfo.userName) {
      this.nameInvalidMessage = 'Name is required';
    } else if (this.purchaseInfo.userName.length < 6) {
      this.nameInvalidMessage = 'Minimum length is 6';
    } else {
      this.nameInvalidMessage = '';
    }
  }

  validateAddress(): void {
    if (!this.purchaseInfo.address) {
      this.addressInvalidMessage = 'Address is required';
    } else if (this.purchaseInfo.address.length < 10) {
      this.addressInvalidMessage = 'Minimum length is 10';
    } else {
      this.addressInvalidMessage = '';
    }
  }

  validateCard(): void {
    if (!this.purchaseInfo.creditCard) {
      this.cardInvalidMessage = 'Credit card number is required';
    } else if (this.purchaseInfo.creditCard.length < 16) {
      this.cardInvalidMessage = 'Minimum length is 16';
    } else {
      this.cardInvalidMessage = '';
    }
  }
}
