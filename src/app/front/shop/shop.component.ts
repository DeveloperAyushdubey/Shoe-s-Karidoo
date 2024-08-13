import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FotterComponent } from "../fotter/fotter.component";
import { HomeproductComponent } from "../homeproduct/homeproduct.component";
import { CommonModule } from '@angular/common';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NavbarComponent, FotterComponent, HomeproductComponent,CommonModule,RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  Maincategory:any=[]
  Subcategory:any=[]
  Brand:any=[]
  Color:any=[]
  filterproduct:any=[]
  allproduct:any=[]

  mc:string=""
  sc:string=""
  br:string=""
  cl:string=""
 


  constructor(private service:DataserviceService , private activatedroute:ActivatedRoute)
  {
    this.activatedroute.queryParams.subscribe((params:any)=>{
      this.mc = params.mc?params.mc:""
      this.sc = params.mc?params.sc:""
      this.br = params.mc?params.br:""
      this.cl = params.mc?params.cl:""
      this.service.getproduct().subscribe((response:any)=>{
        this.allproduct = response
        this.filterdata(this.mc,this.sc,this.br,this.cl, this.allproduct)
    
      })
      
    })

    this.service.getmaincategory().subscribe((response:any)=>{
      this.Maincategory = response
    })

    this.service.getsubcategory().subscribe((response:any)=>{
      this.Subcategory = response
    })

    this.service.getbrand().subscribe((response:any)=>{
      this.Brand = response
    })

    this.service.getcolor().subscribe((response:any)=>{
      this.Color = response
    })
}



filterdata(mc:string ,sc:string,br:string,cl:string,data:any){
 console.log(mc,br,sc,cl);
 
if(mc==="" && sc==="" && br==="" && cl==="")
this.filterproduct = data
else if(mc!=="" && sc==="" && br==="" && cl==="") 
 this.filterproduct = data.filter((x:any)=>x.maincategory===mc)
else if(mc==="" && sc!=="" && br==="" && cl==="")
  
  this.filterproduct = data.filter((x:any)=>x.subcategory===sc)
else if(mc==="" && sc==="" && br==="" && cl!=="")
  this.filterproduct = data.filter((x:any)=>x.brand===br)
else if(mc==="" && sc==="" && br==="" && cl!=="")
  this.filterproduct = data.filter((x:any)=>x.Color===cl)
else if(mc!=="" && sc!=="" && br==="" && cl==="")
  this.filterproduct = data.filter((x:any)=>x.maincategory===mc && x.subcategory===sc )
else if(mc!=="" && sc!=="" && br!=="" && cl==="")
  this.filterproduct = data.filter((x:any)=>x.maincategory===mc && x.subcategory===sc && x.brand ===br )
else if(mc!=="" && sc==="" && br!=="" && cl==="")
  this.filterproduct = data.filter((x:any)=>x.maincategory===mc && x.brand===br)
else if(mc!=="" && sc==="" && br==="" && cl!=="")
  this.filterproduct = data.filter((x:any)=>x.maincategory===mc && x.color===cl)
else if(mc!=="" && sc!=="" && br==="" && cl!=="")
  this.filterproduct = data.filter((x:any)=>x.maincategory===mc && x.color===cl && x.subcategory===sc)
else 
this.filterproduct = data.filter((x:any)=>x.maincategory === mc && x.subcategory ===sc && x.brand ===br && x.color === cl)
  }
}

