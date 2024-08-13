import { Component, forwardRef, Input } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { cwd, title } from 'process';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homeproduct',
  standalone: true,
  imports: [CommonModule,forwardRef(()=>HomeComponent),RouterLink],
  templateUrl: './homeproduct.component.html',
  styleUrl: './homeproduct.component.css'
})
export class HomeproductComponent {


@Input() Maincategory:any;
@Input() Product:any;
finaldata:any[]=[]
title:any=""


ngOnChanges(){
  
 console.log(this.Maincategory)
 console.log(this.Product)    
  
 if(this.Maincategory==null){
  this.finaldata = this.Product
  this.title = "All Product"
 }

this.finaldata = this.Product.filter((x:any)=>x.maincategory == this.Maincategory.name).slice(0,3)
this.title =this.Maincategory.name
}

//   getproduct(){
// this.service.getproduct().subscribe((response:any)=>{

// })


}
