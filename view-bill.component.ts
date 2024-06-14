// view-bill.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-bill',
  standalone: true,
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss'],
  imports: [CommonModule]
})
export class ViewBillComponent implements OnInit {
  orders: Order[] = [];
  totalAmount: number = 0;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
        this.calculateTotal();
      },
      (error: any) => console.error('Error loading orders', error)
    );
  }

  calculateTotal(): void {
    this.totalAmount = this.orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);
  }

  printBill(): void {
    window.print();
  }

  goBack(): void {
    this.router.navigate(['/order']);
  }
}
