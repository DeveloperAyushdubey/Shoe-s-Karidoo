import { Component } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';

@Component({
  selector: 'app-buyerprofile',
  standalone: false,
  
  templateUrl: './buyerprofile.component.html',
  styleUrl: './buyerprofile.component.css'
})
export class BuyerprofileComponent {


  user:any={}

  constructor(private service:DataserviceService){
    this.service.getsingleuser(localStorage.getItem("userid")).subscribe((response:any)=>{
      console.log(response)
    this.user = response
    })
  }
}
