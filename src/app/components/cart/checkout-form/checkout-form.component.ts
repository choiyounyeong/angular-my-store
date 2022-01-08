import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  userName: string = '';
  address: string = '';
  creditCard: string = '';

  @Output() submitSuccess: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitForm(): void {
    this.submitSuccess.emit(this.userName);
  }
}
