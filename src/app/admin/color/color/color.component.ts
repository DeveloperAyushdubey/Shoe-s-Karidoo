import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';

@Component({
  selector: 'app-color',
  standalone: false,
  
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
item:any=[]  



constructor(private service:DataserviceService)
{
  this.getalldata()
}



getalldata(){
  this.service.getcolor().subscribe((response:any)=>{
    this.item = response
  })
}

deletedata(id:any){
  if(window.confirm("Are You Delete Data")){
    this.service.deletecolor(id).subscribe((response:any)=>{
      this.getalldata()
    })
  }
}



}
