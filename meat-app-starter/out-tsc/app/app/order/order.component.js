var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { OrderService } from "./order.service";
import { OrderItem } from "./order.model";
var OrderComponent = (function () {
    function OrderComponent(orderService) {
        this.orderService = orderService;
        this.delivery = 8;
        this.paymentOptions = [
            { label: "Dinheiro", value: "MON" },
            { label: "Cartão de Débito", value: "DEB" },
            { label: "Cartão Refeição", value: "REG" },
        ];
    }
    OrderComponent.prototype.ngOnInit = function () { };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.cartItems().map(function (item) { return new OrderItem(item.quantity, item.menuItem.id); });
        this.orderService.checkOrder(order).subscribe(function (orderId) {
            console.log("Compra conclu\u00EDda: " + orderId);
            _this.orderService.clear();
        });
        console.log(order);
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        return this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        return this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        return this.orderService.remove(item);
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    Component({
        selector: "mt-order",
        templateUrl: "./order.component.html",
    }),
    __metadata("design:paramtypes", [OrderService])
], OrderComponent);
export { OrderComponent };
//# sourceMappingURL=order.component.js.map