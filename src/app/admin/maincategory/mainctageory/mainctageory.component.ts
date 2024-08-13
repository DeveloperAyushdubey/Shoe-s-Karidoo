import { Component } from '@angular/core';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';

@Component({
  selector: 'app-mainctageory',
  standalone: false,

  templateUrl: './mainctageory.component.html',
  styleUrl: './mainctageory.component.css'
})
export class MainctageoryComponent {

  item:any=[]

  constructor(private service:DataserviceService)
  {

    this.getalldata();
  }


  getalldata(){
    this.service.getmaincategory().subscribe((response:any)=>{
      this.item = response
    })
  }


  deletedata(id:any){
   if(window.confirm("Are you Sure to Delete data")){
   
    this.service.deletemaincategory(id).subscribe((response:any)=>{
     this.getalldata();
    })
   }
  }
}
