import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import {MEAT_API} from './app.api'
import {ROUTES} from './app.routes'


import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsService } from './restaurants/restaurants.service'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component'
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service'
import { OrderComponent } from './order/order.component'
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms'
import { InputComponent } from 'app/shared/input/input.component'
import { RadioComponent } from 'app/shared/radio/radio.component'
import {OrderItemsComponent} from 'app/order/order-items/order-items.component'
import { OrderService } from './order/order.service'
import { DeliveryCostsComponent } from '../app/order/delivery-costs/delivery-costs.component'
import { OrderSummaryComponent } from './order-summary/order-summary.component'
import { RatingComponent } from 'app/shared/rating/rating.component'

@NgModule({
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
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent, 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService,FormBuilder, ShoppingCartService,OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
