import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FotterComponent } from "../fotter/fotter.component";
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { HomeproductComponent } from "../homeproduct/homeproduct.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FotterComponent, CommonModule, HomeproductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  maincategory:any[]=[]
  item:any=[]
  product:any[]=[]
  constructor(private service:DataserviceService)
  {
    this.getallBrand()

    this.service.getmaincategory().subscribe((response:any)=>{
      this.maincategory = response
    })


    this.service.getproduct().subscribe((response:any)=>{
      this.product = response
    })
  }


  getallBrand(){
        this.service.getbrand().subscribe((response:any)=>{
          this.item = response
        })
  }
}
