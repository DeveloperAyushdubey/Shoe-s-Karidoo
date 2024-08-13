import { Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './front/home/home.component';
import { ShopComponent } from './front/shop/shop.component';
import { SingleProductComponent } from './front/single-product/single-product.component';




export const routes: Routes = [
    {path:"",component:HomeComponent },
    {path:"shop",component:ShopComponent },
   
  
    {path:"singleproduct",component:SingleProductComponent },
  

    {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
    {path:"buyer",loadChildren:()=>import("./buyer/buyer.module").then(m=>m.BuyerModule)}
];
