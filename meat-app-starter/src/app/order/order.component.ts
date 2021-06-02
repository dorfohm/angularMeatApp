import { Component, OnInit } from "@angular/core"
import { RadioOption } from "app/shared/radio/radio-option.model"
import { OrderService } from "./order.service"
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model"
import { Order, OrderItem } from "./order.model"
import { Router } from '@angular/router'

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  delivery: number = 8

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REG" },
  ];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() { }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    return this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    return this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    return this.orderService.remove(item)
  }
}
