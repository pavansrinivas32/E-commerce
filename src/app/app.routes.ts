import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { Err404Component } from './components/error/err404/err404.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CurrentdispatchsComponent } from './components/currentdispatchs/currentdispatchs.component';
import { DispatchsComponent } from './components/dispatchs/dispatchs.component';
import { ReadytodispatchComponent } from './components/readytodispatch/readytodispatch.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { ConformaddressComponent } from './components/ordering/conformaddress/conformaddress.component';
import { PaymentComponent } from './components/ordering/payment/payment.component';
import { OrderconformComponent } from './components/ordering/orderconform/orderconform.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'Page-not-found', component: Err404Component },
  { path: 'orders', component: OrdersComponent },
  { path: 'current-dispatch', component: CurrentdispatchsComponent },
  { path: 'dispatch', component: DispatchsComponent },
  { path: 'ready-to-dispatch', component:  ReadytodispatchComponent},
  { path: 'item-list', component: ItemlistComponent },
  // 
  { path: 'address', component: ConformaddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'order-confirmation', component: OrderconformComponent },
  { path: '**', redirectTo: 'Page-not-found' },
];
