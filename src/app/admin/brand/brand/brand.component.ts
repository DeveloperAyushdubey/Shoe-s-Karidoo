import { Component } from '@angular/core';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';

@Component({
  selector: 'app-brand',
  standalone: false,
  
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {

  item:any=[]

  constructor(private service:DataserviceService)
  {

    this.getalldata()
  }



  getalldata(){
    this.service.getbrand().subscribe((response:any)=>{
      this.item = response
    })
  }


  deletedata(id:any){

   if(window.confirm("Are You Sure Delete Data")){
    this.service.deletebrand(id).subscribe((response:any)=>{
      alert("Data Delete")
      this.getalldata()
     })
   }
  }
}
