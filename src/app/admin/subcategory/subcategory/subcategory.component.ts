import { Component } from '@angular/core';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';

@Component({
  selector: 'app-subcategory',
  standalone:false,

  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css'
})
export class SubcategoryComponent {

item:any=[]
constructor(private service:DataserviceService)
{

  this.getalldata()
}



getalldata(){
  this.service.getsubcategory().subscribe((response:any)=>{
    this.item = response
  })
}
deletedata(id:any)
{
 if(window.confirm("Are you sure Delete data")){
  this.service.deletesubcategory(id).subscribe((response:any)=>{
   
    this.getalldata()
  })
 }

}
}
