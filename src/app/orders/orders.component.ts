import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { ORDERS } from '../mock-orders';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  selectedOrder: Order;

  onSelect(order: Order): void {
    this.selectedOrder = order;
    console.log(order);
  }

  getOrders(): void {
    this.OrderService.getOrders()
      .subscribe( OREDRS => this.orders = ORDERS );
  }

  constructor( private OrderService: OrderService ) { }

  ngOnInit() {
    this.getOrders();
  }

}
