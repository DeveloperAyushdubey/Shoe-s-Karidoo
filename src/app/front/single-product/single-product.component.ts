import { Component } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FotterComponent } from "../fotter/fotter.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { response } from 'express';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [FotterComponent, NavbarComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  data: any = {}
  id: any = ""
  count: number = 1
  totalamount: number = 0
  user:any=""
 
  constructor(private service: DataserviceService, private activatedroute: ActivatedRoute,private router:Router) {

    this.activatedroute.queryParams.subscribe((params: any) => {
      this.id = params.id

      this.service.getsingleproduct(this.id).subscribe((response: any) => {
        this.data = response
        this.data.price = Number(this.data.price)
        this.data.quntity = Number(this.data.quntity)
        this.totalamount = this.data.price

      })
    })
  }

  decrement() {
    if (this.count > 1) {
      this.count--
      this.totalamount =  this.data.price * this.count

    }
  }
  increment() {
    if (this.data.quntity > this.count)
      this.count++
    this.totalamount = this.data.price * this.count

  }



  addtocart(){
    this.service.getCart().subscribe((response:any)=>{
      let item = response.find((x:any)=>x.product===this.id && x.user === localStorage.getItem("userid"))
      if(!item)
        item={
       user:localStorage.getItem("userid"),
        data:this.id,
        name:this.data.name,
        color:this.data.color,
        size:this.data.size,
        maincategory:this.data.maincategory,
        subcategroy:this.data.subcatgeory,
        brand:this.data.brand,
        stock:this.data.stock,
        quntity:this.count,
        totalamount:this.totalamount,
        price:this.data.price,
        pic1:this.data.pic1,
        pic2:this.data.pic2,
        pic3:this.data.pic3,
        }
        this.service.createcart(item).subscribe((response:any)=>{
         
        })
    })
  }



}
