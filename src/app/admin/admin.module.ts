import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { MainctageoryComponent } from './maincategory/mainctageory/mainctageory.component';
import { CreatemainctageoryComponent } from './maincategory/createmainctageory/createmainctageory.component';
import { UpdatemainctageoryComponent } from './maincategory/updatemainctageory/updatemainctageory.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FotterComponent } from "../front/fotter/fotter.component";
import { NavbarComponent } from "../front/navbar/navbar.component";
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { CreatesubcategoryComponent } from './subcategory/createsubcategory/createsubcategory.component';
import { UpdatesubcategoryComponent } from './subcategory/updatesubcategory/updatesubcategory.component';
import { BrandComponent } from './brand/brand/brand.component';
import { CreatebrandComponent } from './brand/createbrand/createbrand.component';
import { UpdatebrandComponent } from './brand/updatebrand/updatebrand.component';
import { ProductComponent } from './product/product/product.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ColorComponent } from './color/color/color.component';
import { CreatecolorComponent } from './color/createcolor/createcolor.component';
import { UpdatecolorComponent } from './color/updatecolor/updatecolor.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [

AdminhomeComponent,
  MainctageoryComponent,
  CreatemainctageoryComponent,
  UpdatemainctageoryComponent,
  SidebarComponent,

  SubcategoryComponent,
  CreatesubcategoryComponent,
 UpdatesubcategoryComponent,



 BrandComponent,
 CreatebrandComponent,
 UpdatebrandComponent,

 ProductComponent,
 CreateproductComponent,
 UpdateproductComponent,



 ColorComponent,
 CreatecolorComponent,
 UpdatecolorComponent,


 SignupComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FotterComponent,
    NavbarComponent
]
})
export class AdminModule { }
