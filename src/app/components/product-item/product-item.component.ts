import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  selectedValue: number = 1;
  constructor() {}

  ngOnInit(): void {}

  addSelectedProduct(product: Product) {
    const productInCart: ProductInCart = {
      id: product.id,
      name: product.name,
      url: product.url,
      price: product.price,
      quantity: this.selectedValue,
    };
    this.addProduct.emit(productInCart);
  }
}
