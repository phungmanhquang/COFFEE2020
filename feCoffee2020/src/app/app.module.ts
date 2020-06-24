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

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppContact } from './app.contacts';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { LoginComponent } from './login/login.component';
import { UserManagerComponent } from './admin/user-manager/user-manager.component';
import { OrderManagerComponent } from './admin/order-manager/order-manager.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderInfoComponent } from './cart-detail/components/order-info/order-info.component';
import { OrderHistoryComponent } from './cart-detail/components/order-history/order-history.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("784893333837-ipma1c3aqdvg0m87nqrc93okf8nurpj0.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("271228917606217")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    CartComponent,
    DetailProductComponent,
    CartDetailComponent,
    OrderFormComponent,
    LoginComponent,
    UserManagerComponent,
    OrderManagerComponent,
    DashboardComponent,
    OrderInfoComponent,
    OrderHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(AppContact.FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    AngularFirestore,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
