import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component'
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserManagerComponent } from './admin/user-manager/user-manager.component';
import { OrderManagerComponent } from './admin/order-manager/order-manager.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderInfoComponent } from './cart-detail/components/order-info/order-info.component';
import { OrderHistoryComponent } from './cart-detail/components/order-history/order-history.component';


const routes: Routes = [
  {
    path : 'menu',
    component: MenuComponent
  },
  {
    path : 'cart',
    canActivate: [AuthGuard],
    component: CartDetailComponent,
    children: [
      {
        path: 'orderInfo',
        component: OrderInfoComponent
      },
      {
        path: 'orderHistory',
        component: OrderHistoryComponent
      },
      {
        path : '**',
        redirectTo: 'orderInfo'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children : [
      {
        path : 'user',
        component : UserManagerComponent
      },
      {
        path : 'order',
        component: OrderManagerComponent
      },
      {
        path : 'dashboard',
        component: DashboardComponent
      },
      {
        path : '**',
        redirectTo: 'user'
      }
    ]
  },
  {
    path : '**',
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
