import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { cwd } from 'process';

@Component({
  selector: 'app-createsubcategory',
  standalone: false,
  
  templateUrl: './createsubcategory.component.html',
  styleUrl: './createsubcategory.component.css'
})
export class CreatesubcategoryComponent {


  myform = new FormGroup({
    name:new FormControl("",Validators.required),
    status:new FormControl("")
  })

  constructor(private service:DataserviceService,private router:Router){}

  
  public get name() :any {
    return this.myform.get("name")
  }


  postdata(){
  this.service.getsubcategory().subscribe((response:any)=>{
    let item = response.find((x:any)=>x.name == this.myform.value.name)
    if(item){
    alert("Data is Already Insert")
    }else{
      let item = {
        name:this.myform.value.name,
        status:this.myform.value.status ?"Active":"Inactive"
      }
      this.service.createsubcategory(item).subscribe((response:any)=>{
        this.router.navigate(['/admin/subcategory'])
      })
    }
  })
  }
  
}
