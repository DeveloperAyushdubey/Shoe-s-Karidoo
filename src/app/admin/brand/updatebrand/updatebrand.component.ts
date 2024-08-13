import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-updatebrand',
  standalone: false,
  
  templateUrl: './updatebrand.component.html',
  styleUrl: './updatebrand.component.css'
})
export class UpdatebrandComponent {



  myform = new FormGroup({
    name:new FormControl("",Validators.required),
    pic : new FormControl(""),
    status : new FormControl("")
  })
  id:any=""


  constructor(private service:DataserviceService,private activatedroute:ActivatedRoute , private router:Router)
  {
   this.activatedroute.queryParams.subscribe((params:any)=>{
  this.id = params.id
  this.service.getsinglebrand(this.id).subscribe((response:any)=>{
    this.myform.patchValue({
      name:response.name,
      pic:response.pic,
      status:response.status
    })
  })
   })

  }

  
  public get name() : any {
    return  this.myform.get("name")
  }


  fileupload(e:any){
    this.myform.patchValue({pic : `/assets/brands/${e.target.files[0].name}`})
  }
  postdata(){
         let item = {
          name : this.myform.value.name,
          status:this.myform.value.status ? "Active":"Inactive",
          pic:this.myform.value.pic,
          id:this.id

         }
         this.service.updatebrand(item).subscribe((response:any)=>{
           this.router.navigate(['/admin/brand'])
         })
  }

  
}