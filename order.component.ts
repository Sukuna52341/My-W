import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  orderType: 'online' | 'onsite' | '' = '';
  location: string = '';
  tableNumber: number | undefined = undefined;
  menuId: number = 0;
  quantity: number = 1;
  totalAmount: number = 0;
  successMessage: string = '';

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadOrders();
    this.route.queryParams.subscribe(params => {
      if (params['menuId']) {
        this.menuId = +params['menuId'];
      }
    });
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
        this.calculateTotal(); // Calculate total amount after loading orders
      },
      (error: any) => console.error('Error loading orders', error)
    );
  }

  onSubmit(): void {
    const newOrder: Order = {
      menu_id: this.menuId,
      quantity: this.quantity,
      orderType: this.orderType,
      location: this.orderType === 'online' ? this.location : undefined,
      table_number: this.orderType === 'onsite' ? this.tableNumber : undefined,
      price: 0,
      order_date: new Date().toISOString()
    };

    this.orderService.placeOrder(newOrder).subscribe(
      (order: Order) => {
        this.orders.push(order);
        this.calculateTotal(); // Recalculate total amount after placing order
        this.successMessage = 'Order successful!';
      },
      (error: any) => {
        console.error('Error placing order', error);
      }
    );
  }

  calculateTotal(): void {
    this.totalAmount = this.orders.reduce((sum, order) => sum + (order.price * order.quantity), 0);
  }

  goToMenu(): void {
    this.router.navigate(['/menu']);
  }

  viewBill(): void {
    this.router.navigate(['/view-bill'], { state: { orders: this.orders, totalAmount: this.totalAmount } });
  }
}
