var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from 'app/shared/input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { OrderItemsComponent } from 'app/order/order-items/order-items.component';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from '../app/order/delivery-costs/delivery-costs.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            HomeComponent,
            AboutComponent,
            RestaurantsComponent,
            RestaurantComponent,
            RestaurantDetailComponent,
            MenuComponent,
            ShoppingCartComponent,
            MenuItemComponent,
            ReviewsComponent,
            OrderComponent,
            InputComponent,
            RadioComponent,
            OrderItemsComponent,
            DeliveryCostsComponent
        ],
        imports: [
            BrowserModule,
            HttpModule,
            FormsModule,
            RouterModule.forRoot(ROUTES)
        ],
        providers: [RestaurantsService, ShoppingCartService, OrderService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map