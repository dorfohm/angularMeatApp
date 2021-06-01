import { Component, OnInit } from '@angular/core';
import {ShoppingCartService } from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private ShoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  removeItem(item: any) {
    this.ShoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    this.ShoppingCartService.addItem(item);
  }

  clear() {
    this.ShoppingCartService.clear();
  }

  items(): any[] {
    return this.ShoppingCartService.items;
  }

  total(): number {
    return this.ShoppingCartService.total();
  }

}
