import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './menu/cart/cart.component';
import { DetailProductComponent } from './menu/detail-product/detail-product.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { OrderFormComponent } from './cart-detail/order-form/order-form.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppContact } from './app.contacts';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    CartComponent,
    DetailProductComponent,
    CartDetailComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(AppContact.FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
