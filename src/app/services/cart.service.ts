import { Injectable } from '@angular/core';
import { ProductInCart } from '../models/product-in-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //cartCache = window.localStorage;
  cart: ProductInCart[];

  constructor() {
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

  addToCart(product: ProductInCart): void {
    const sameProduct = this.cart.find((p) => p.id === product.id);
    if (sameProduct) {
      sameProduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
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
