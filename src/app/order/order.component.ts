import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order = {
    id: 1,
    address: 'пр. Ленина 1',
    tel: 123456,
    name: 'John',
    courier: 'Вася',
    time: '8:00'
  };

  constructor() { }

  ngOnInit() {
  }

}
