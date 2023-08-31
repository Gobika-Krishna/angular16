import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { orderPlacementService } from './order-placement.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css'],
})
export class OrderPlacementComponent implements OnInit {
  constructor(
    private shoppinglistService: ShoppingListService,
    private orderService: orderPlacementService
  ) {}
  quantity: number;
  price: number;
  modalOpen = false;
  ngOnInit(): void {
    // document.body.style.backgrocsAund = '#f6f6f6'; // display background color only to orders page
    this.orderService.orderValue.subscribe((orderData) => {
      console.log('orderdata:', orderData);
      this.quantity = orderData.quantity;
      this.price = orderData.price;
      console.log(this.quantity);
    });
  }

  orderForm: NgForm;
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.modalOpen = true;
  }
}
