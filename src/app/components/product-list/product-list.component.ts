import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: ProductInCart): void {
    this.cartService.addToCart(product);
    this.snackBar.open(
      `${product.name} x ${product.quantity} : successfully added to cart!`,
      '!',
      {
        duration: 3000,
        horizontalPosition: 'center',
      }
    );
  }
}
