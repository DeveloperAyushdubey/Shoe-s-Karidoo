import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { BuyerprofileComponent } from './buyerprofile/buyerprofile.component';
import { NavbarComponent } from '../front/navbar/navbar.component';
import { FotterComponent } from '../front/fotter/fotter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationpageComponent } from './confirmationpage/confirmationpage.component';


@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    BuyerprofileComponent,
    UpdateprofileComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationpageComponent,
  
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    NavbarComponent,
    FotterComponent,
    ReactiveFormsModule
  ]
})
export class BuyerModule { }
