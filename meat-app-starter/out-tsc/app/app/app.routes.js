import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { OrderComponent } from "./order/order.component";
export var ROUTES = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "restaurants", component: RestaurantsComponent },
    {
        path: "restaurants/:id",
        component: RestaurantDetailComponent,
        children: [
            { path: "", redirectTo: "menu", pathMatch: "full" },
            { path: "menu", component: MenuComponent },
            { path: "reviews", component: ReviewsComponent },
        ],
    },
    { path: "order", component: OrderComponent }
];
//# sourceMappingURL=app.routes.js.map