import {MenuItem} from "app/restaurant-detail/menu-item/menu-item.model"


export class CartItem{
    constructor(public menuItem, public quantity: number = 1){}  
    value():number{
        return this.menuItem.price * this.quantity
    } 
}

