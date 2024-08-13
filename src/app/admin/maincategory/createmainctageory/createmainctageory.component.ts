import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmainctageory',
  standalone: false,

  templateUrl: './createmainctageory.component.html',
  styleUrl: './createmainctageory.component.css'
})
export class CreatemainctageoryComponent {



  myform = new FormGroup({
    name: new FormControl("", Validators.required),
    status : new FormControl("")
  })


  constructor(private service:DataserviceService,private router:Router){}


  
   get name() : any {
    return  this.myform.get("name")
  }

  postdata(){
   this.service.getmaincategory().subscribe((response:any)=>{
    let item = response.find((x:any)=>x.name==this.myform.value.name)
    if(item){
      alert("Category Already Exits")

    }else{
      let item={
        name:this.myform.value.name,
        status:this.myform.value.status ?"Active":"Inactive"
       }
       this.service.createmaincategory(item).subscribe((response:any)=>{
        alert("Data Insert")
this.router.navigate(['/admin/maincategory'])
       })
    }
   })
  }

  
}
