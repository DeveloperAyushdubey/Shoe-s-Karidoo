import { Component } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: false,
  
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  data:any=[]
user:any={}
 subtotal:number = 0
 shiping:number = 0
 totalamount:number = 0
 mode:string="COD"

  constructor(private service:DataserviceService , private router:Router)
  {
    this.service.getsingleuser(localStorage.getItem("userid")).subscribe((response:any)=>{
      console.log(response)
    this.user = response
    this.getcartdata()
  })}


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



  modeevent(e:any){
    this.mode = e.target.value
  }




placeorder(){
  let item={
    user : this.user.id,
    mode :this.mode,
    totalamount:this.totalamount,
    product : this.data,
    status:"Pending",
    subtotal:this.subtotal,
    shiping : this.shiping,
    date:new Date()
  }
  this.service.createcheckout(item).subscribe((response:any)=>{
    this.data.forEach((item:any) => {
      this.service.getsingleproduct(item).subscribe((response:any)=>{
        response.quntity = response.quntity - item.quntity
        if(response.quntity      ===0)
          response.stock = "Out Of Stock"
        this.service.updateproductquntity(response).subscribe((response:any)=>{})
      })
      this.service.deletecart(item.id).subscribe((response:any)=>{})
  
    });
    this.router.navigate(['/buyer/confirmation'])
  })

}
}
