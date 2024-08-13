import { Component } from '@angular/core';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  item:any=[]


  constructor(private service:DataserviceService)
  {
    this.getalldata();
  }


  getalldata()
{
  this.service.getproduct().subscribe((response:any)=>{
    this.item = response
  })
}


deletedata(id:any){
   if(window.confirm("Are you Sure Delete data")){
    this.service.deleteproduct(id).subscribe((response:any)=>{
      this.getalldata()
     })
  }
   }

}
