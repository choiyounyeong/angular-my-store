import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Product } from 'src/app/models/product';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private httpService: HttpService,
    private cartService: CartService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: ProductInCart): void {
    this.cartService.addToCart(product);
  }
}
