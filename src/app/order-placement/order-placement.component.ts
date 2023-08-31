import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { orderPlacementService } from './order-placement.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css'],
})
export class OrderPlacementComponent implements OnInit {
  constructor(public orderService: orderPlacementService) {}
  quantity: number;
  price: number;
  modalOpen = false;
  paymentMethod: string = 'cd'; // Default payment method
  buttonLabel: string = 'Place Order'; // Default button label
  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51Nkop0SD0VVqBFnMDgcoNw8jOhyaeJgUO6WMNEl3dZ5x0RpV3JWzBOLeYj7PzCQ3YObuk15V1p9D1LUvdBoAD5P100gmzdnbE6';

  ngOnInit(): void {
    // document.body.style.backgrocsAund = '#f6f6f6'; // display background color only to orders page
    this.orderService.orderValue.subscribe((orderData) => {
      console.log('orderdata:', orderData);
      this.quantity = orderData.quantity;
      this.price = orderData.price;
      console.log(this.quantity);
    });
    this.invokeStripe();
  }

  orderForm: NgForm;
  onSubmit(form: NgForm) {
    console.log(form.value);
    if (this.paymentMethod == 'cd') {
      this.modalOpen = true;
    } else if (this.paymentMethod == 'card') {
      this.makePayment();
    }
  }
  onPaymentMethodChange(method: string) {
    this.paymentMethod = method;

    if (method === 'cd') {
      this.buttonLabel = 'Place Order';
    } else if (method === 'card') {
      this.buttonLabel = 'Checkout';
    }
  }
  makePayment() {
    console.log('triggered');
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        this.modalOpen = true;
      },
    });
    paymentHandler.open({
      name: 'your Shopping',
      description: 'please enter below details',
      amount: this.price,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
            this.modalOpen = true;
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}
