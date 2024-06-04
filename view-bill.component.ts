import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {
  userId: number = 1; // Static user ID for demonstration purposes
  orders: any[] = [];
  total: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getUserOrders(this.userId).subscribe(data => {
      this.orders = data;
      this.calculateTotal();
    });
  }

  calculateTotal(): void {
    this.total = this.orders.reduce((acc, order) => acc + (order.price * order.quantity), 0);
  }
}