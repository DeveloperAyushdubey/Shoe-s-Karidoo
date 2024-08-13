import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  standalone: false,
  
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {



  Maincategory:any=[]
  Subcategory:any=[]
  Brand:any=[]
  Color:any=[]

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


constructor(private service:DataserviceService ,private router:Router){

  this.GetMaincategory()
  this.GetSubcategory()
  this.GetColor()
  this.GetBrand()
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
  const file = e.target.files[0];
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

 description:this.myform.value.description
}

this.service.createproduct(item).subscribe((response:any)=>{
 this.router.navigate(['/admin/product'])
})






}



 
  
}
