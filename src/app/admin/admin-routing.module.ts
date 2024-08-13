import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MainctageoryComponent } from './maincategory/mainctageory/mainctageory.component';
import { CreatemainctageoryComponent } from './maincategory/createmainctageory/createmainctageory.component';
import { UpdatemainctageoryComponent } from './maincategory/updatemainctageory/updatemainctageory.component';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { UpdatesubcategoryComponent } from './subcategory/updatesubcategory/updatesubcategory.component';
import { CreatesubcategoryComponent } from './subcategory/createsubcategory/createsubcategory.component';
import { BrandComponent } from './brand/brand/brand.component';
import { UpdatebrandComponent } from './brand/updatebrand/updatebrand.component';
import { CreatebrandComponent } from './brand/createbrand/createbrand.component';
import { ProductComponent } from './product/product/product.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { ColorComponent } from './color/color/color.component';
import { UpdatecolorComponent } from './color/updatecolor/updatecolor.component';
import { CreatecolorComponent } from './color/createcolor/createcolor.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:"",component:AdminhomeComponent},

  {path:"maincategory",component:MainctageoryComponent},
  {path:"maincategory/create",component:CreatemainctageoryComponent},
  {path:"maincategory/update",component:UpdatemainctageoryComponent},


  {path:"subcategory",component:SubcategoryComponent},
  {path:"subcategory/update",component:UpdatesubcategoryComponent},
  {path:"subcategory/create",component:CreatesubcategoryComponent},



  {path:"brand",component:BrandComponent},
  {path:"brand/update",component:UpdatebrandComponent},
  {path:"brand/create",component:CreatebrandComponent},


  {path:"product",component:ProductComponent},
  {path:"product/create",component:CreateproductComponent},
  {path:"product/update",component:UpdateproductComponent},

  {path:"color",component:ColorComponent},
  {path:"color/update",component:UpdatecolorComponent},
  {path:"color/create",component:CreatecolorComponent},
  
  
  
  {path:"signup",component:SignupComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
