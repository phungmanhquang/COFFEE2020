import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component'
import { CartDetailComponent } from './cart-detail/cart-detail.component';

const routes: Routes = [
  {
    path : 'menu',
    component: MenuComponent
  },
  {
    path : 'cart',
    component: CartDetailComponent
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
