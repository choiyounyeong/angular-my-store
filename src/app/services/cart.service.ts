import { Injectable } from '@angular/core';
import { PurchaseInfo } from '../models/customer-info';
import { ProductInCart } from '../models/product-in-cart';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  //cartCache = window.localStorage;
  cart: ProductInCart[];
  purchaseInfo: PurchaseInfo | undefined;

  constructor(private snackBar: MatSnackBar) {
    //this.cart = this.getCartFromCache();
    this.cart = [];
  }

  // getCartFromCache(): ProductInCart[] {
  //   const cachedCart = this.cartCache.getItem('cart');
  //   return cachedCart ? JSON.parse(cachedCart) : [];
  // }

  // saveCartToCache(): void {
  //   this.cartCache.setItem('cart', JSON.stringify(this.cart));
  // }

  saveCustomerOrder(purchaseInfo: PurchaseInfo): void {
    this.purchaseInfo = purchaseInfo;
  }

  retrieveAndDeletePurchaseInfo(): PurchaseInfo | undefined {
    return this.purchaseInfo;
  }

  addToCart(product: ProductInCart): void {
    const sameProduct = this.cart.find((p) => p.id === product.id);
    if (sameProduct) {
      sameProduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
  }

  removeFromCart(productIdToBeRemoved: string): void {
    const productGone = this.cart.find((p) => p.id === productIdToBeRemoved);
    this.cart = this.cart.filter((p) => p.id !== productIdToBeRemoved);
    if (productGone) {
      this.snackBar.open(
        `${productGone.name} x ${productGone.quantity} : removed from cart`,
        '!',
        {
          duration: 2000,
          horizontalPosition: 'center',
        }
      );
    }
  }

  getCart(): ProductInCart[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    //this.cartCache.clear();
  }
}
