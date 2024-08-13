import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-updatesubcategory',
  standalone: false,
  
  templateUrl: './updatesubcategory.component.html',
  styleUrl: './updatesubcategory.component.css'
})
export class UpdatesubcategoryComponent {



  myform = new FormGroup({
    name:new FormControl("",Validators.required),
   status : new FormControl("")
  })
  id:any="";

  constructor(private service:DataserviceService,private activedroute:ActivatedRoute,private router:Router)
  {
  this.activedroute.queryParams.subscribe((params:any)=>{
    this.id = params.id
    this.service.getsinglesubcategory(this.id).subscribe((response:any)=>{
      this.myform.patchValue({
        name:response.name,
        status:response.status
      })
    })
  })

  }

  
  public get name() : any {
    return this.myform.get("name")
  
  }


  updatedata(){
  let item ={
    name:this.myform.value.name,
    status:this.myform.value.status?"Active":"Inactive",
    id:this.id
  }
  this.service.updatesubcategory(item).subscribe((response:any)=>{
    this.router.navigate(['/admin/subcategory'])
  })
  }
  
}
