import { Component, OnInit } from '@angular/core';
import { PurchaseInfo } from 'src/app/models/customer-info';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  purchaseInfo: PurchaseInfo | undefined;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.purchaseInfo = this.cartService.retrieveAndDeletePurchaseInfo();
  }
}
