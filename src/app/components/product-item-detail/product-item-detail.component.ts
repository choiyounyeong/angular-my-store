import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Output() addProduct: EventEmitter<ProductInCart> = new EventEmitter();

  product: Product | undefined;
  selectedValue: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService.getProducts().subscribe((data) => {
        this.product = data.find((p) => p.id == params['id']);
      });
    });
  }

  addSelectedProduct(product: Product) {
    const productInCart: ProductInCart = {
      id: product.id,
      name: product.name,
      url: product.url,
      price: product.price,
      quantity: Number(this.selectedValue),
    };
    this.cartService.addToCart(productInCart);
    this.snackBar.open(
      `${productInCart.name} x ${productInCart.quantity} : successfully added to cart!`,
      '!',
      {
        duration: 3000,
        horizontalPosition: 'center',
      }
    );
  }
}
