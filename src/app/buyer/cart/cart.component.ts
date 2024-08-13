import { Component } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { cwd } from 'process';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

 data:any=[]

 subtotal:number = 0
 shiping:number = 0
 totalamount:number = 0

  constructor(private service:DataserviceService)
  {
    this.getcartdata()
  }


  getcartdata(){
    this.service.getCart().subscribe((response:any)=>{
     this.data = response.filter((x:any)=>x.user === localStorage.getItem("userid"))
    console.log(this.data);
       
   
    for(let item of this.data){
     this.subtotal +=item.totalamount
    
    }
    if(this.subtotal>0 && this.subtotal<1000){
      this.shiping = 150;
     this.totalamount = this.subtotal +150
    }else{
      this.shiping  = 0;
      this.totalamount = this.subtotal
    }
    this.subtotal
    

    
  })
  }



  deletecart(id:any){
    if(window.confirm("Are You Sure Delete Item"))
    {
      this.service.deletecart(id).subscribe((response:any)=>{
        this.getcartdata();
      })
    }
  }
}
