import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { ProductInCart } from 'src/app/models/product-in-cart';
import { CartService } from 'src/app/services/cart.service';

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
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService.getProductById(params['id']).subscribe((data) => {
        this.product = data;
      });
    });
  }

  addSelectedProduct(product: Product) {
    const productInCart: ProductInCart = {
      id: product.id,
      name: product.name,
      url: product.url,
      price: product.price,
      quantity: this.selectedValue,
    };
    this.cartService.addToCart(productInCart);
    alert('Successfully added item to cart!');
  }
}
