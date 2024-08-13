import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-updateproduct',
  standalone: false,

  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent {

  Maincategory:any=[]
  Subcategory:any=[]
  Brand:any=[]
  Color:any=[]
id:any=""
  myform = new FormGroup({
    name:new FormControl("",[Validators.required,]),
    maincategory: new FormControl(""),
    subcategory: new FormControl(""),
    brand:new FormControl(""),
    color:new FormControl(""),
    price:new FormControl("",Validators.required),
    pic1:new FormControl("",Validators.required),
     pic2:new FormControl("",Validators.required),
     pic3:new FormControl("",Validators.required),
    stock:new FormControl("",Validators.required),
    quntity:new FormControl("",[Validators.required]),
    size : new FormControl("",Validators.required),
    description:new FormControl("",[Validators.required , Validators.minLength(5) , Validators.maxLength(200)])
  
  })


  constructor(private service:DataserviceService,private activatedroute:ActivatedRoute,private router:Router){


    this.GetMaincategory();
    this.GetBrand();
    this.GetColor();
    this.GetSubcategory();


    this.activatedroute.queryParams.subscribe((params:any)=>{
this.id = params.id
this.service.getsingleproduct(this.id).subscribe((response:any)=>{
  this.myform.patchValue({
    name:response.name,
    size:response.size,
    color:response.color,
    maincategory:response.maincategory,
    subcategory:response.subcategory,
    brand:response.brand,
    quntity:response.quntity,
    price:response.price,
    stock:response.stock,
    pic1:response.pic1,
    pic2:response.pic2,
    pic3:response.pic3,
    description:response.description,
  })
})
    })
  }





  public get pic() : any {
    return this.myform.get("pic1")
  }
  
   public get pic2() : any {
     return this.myform.get("pic2")
   }
  
  
  
  
  public get description() : any {
    return this.myform.get("description")
  }
  
  
  
  public get size() : any {
    return this.myform.get("size")
  }
  
  public get quntity() : any {
    return this.myform.get("quntity")
  }
  
  public get stock() : any {
    return this.myform.get("stock")
  }
  
  
  
  public get price() : any {
    return this.myform.get("price")
  }
  public get name() : any {
    return this.myform.get("name")
  }


  GetMaincategory()
{
  this.service.getmaincategory().subscribe((response:any)=>{
    this.Maincategory = response
    this.myform.patchValue({maincategory:this.Maincategory[0].name})
  })
}



GetSubcategory()
{
  this.service.getsubcategory().subscribe((response:any)=>{
    this.Subcategory = response
    this.myform.patchValue({subcategory:this.Subcategory[0].name})

  })
}


GetBrand()
{
  this.service.getbrand().subscribe((response:any)=>{
    this.Brand = response
    this.myform.patchValue({brand:this.Brand[0].name})

  })
}


GetColor()
{
  this.service.getcolor().subscribe((response:any)=>{
    this.Color = response
    this.myform.patchValue({color:this.Color[0].name})

  })
}
  
getInputFile1(e: any) {
 this.myform.patchValue({pic1 : `/assets/Product/${e.target.files[0].name}`})
 
}

getInputFile2(e: any) {
  this.myform.patchValue({pic2 : `/assets/Product/${e.target.files[0].name}`})

}

getInputFile3(e: any) {
  this.myform.patchValue({pic3 : `/assets/Product/${e.target.files[0].name}`})
  
}
  


   postdata(){
    let item = {
      name:this.myform.value.name,
     maincategory: this.myform.value.maincategory,
     subcategory:this.myform.value.subcategory,
     brand:this.myform.value.brand,
     color:this.myform.value.color,
     price:this.myform.value.price,
     quntity:this.myform.value.quntity,
     size:this.myform.value.size,
     stock:this.myform.value.stock,
     pic1:this.myform.value.pic1,
     pic2:this.myform.value.pic2,
     pic3:this.myform.value.pic3,
    
     description:this.myform.value.description,
     id:this.id
    }
    this.service.updateproduct(item).subscribe((response:any)=>{
      this.router.navigate(['/admin/product'])
    })

   }


}
