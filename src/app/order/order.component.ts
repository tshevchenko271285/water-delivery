import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
// import { Orders } from '../mock-orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

}
