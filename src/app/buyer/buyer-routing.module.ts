import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { BuyerprofileComponent } from './buyerprofile/buyerprofile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationpageComponent } from './confirmationpage/confirmationpage.component';

const routes: Routes = [
  {path:"",component:BuyerprofileComponent},
  {path:"signup",component:SignUpComponent},
  {path:"login",component:LoginComponent},
  {path:"updateprofile",component:UpdateprofileComponent},
  {path:"cart",component:CartComponent},
  {path:"Checkout",component:CheckoutComponent},
  {path:"confirmation",component:ConfirmationpageComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
