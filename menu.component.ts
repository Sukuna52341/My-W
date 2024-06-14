import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any[] = [];

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

  orderItem(menuId: number): void {
    this.router.navigate(['/order'], { queryParams: { menuId } });
  }
}