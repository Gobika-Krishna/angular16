import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface Order {
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class orderPlacementService {
  orderValue = new BehaviorSubject<Order>({ quantity: 0, price: 0 });
}
