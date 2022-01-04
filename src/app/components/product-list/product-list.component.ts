import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private httpService: HttpService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // addToCart(): void {
  // }
}
