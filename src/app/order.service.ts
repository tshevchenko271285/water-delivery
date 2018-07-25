import { Injectable } from '@angular/core';
import { Order } from './order';
import { ORDERS } from './mock-orders';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  getOrders():Order[] {
    return ORDERS;
  }

  constructor() { }
}
