import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductInCart } from 'src/app/models/product-in-cart';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() addProduct: EventEmitter<ProductInCart> = new EventEmitter();
  @Output() productDetail: EventEmitter<Product> = new EventEmitter();

  selectedValue: number = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addSelectedProduct(product: Product) {
    const productInCart: ProductInCart = {
      id: product.id,
      name: product.name,
      url: product.url,
      price: product.price,
      quantity: Number(this.selectedValue),
    };
    this.addProduct.emit(productInCart);
  }
  navigateToDetail(product: Product) {
    this.router.navigateByUrl(`detail/${product.id}`, { state: product });
  }

  detailedPage(product: Product) {
    this.productDetail.emit(product);
  }
}
