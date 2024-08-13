import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbrand',
  standalone: false,

  templateUrl: './createbrand.component.html',
  styleUrl: './createbrand.component.css'
})
export class CreatebrandComponent {


  myform = new FormGroup({
    name:new FormControl("",Validators.required),
    status:new FormControl(""),
    pic:new FormControl("",Validators.required)
  })



  constructor(private service:DataserviceService,private router:Router){}


  
  public get name() : any {
    return this.myform.get("name")
  }
    public get pic() : any {
      return  this.myform.get("pic")
    }


    fileupload(e:any){
      this.myform.patchValue({pic : `/assets/brand/${e.target.files[0].name}`})
    }


    postdata(){
      this.service.getbrand().subscribe((response:any)=>{
        let item = response.find((x:any)=>x.name == this.myform.value.name)
        if(item){

        }else{

          let item = {
            name:this.myform.value.name,
            pic:this.myform.value.pic,
            status:this.myform.value.status ? "Active":"Inactive"
          }
          this.service.createbrand(item).subscribe((response:any)=>{
              this.router.navigate(['/admin/brand'])
          })
        }
      })
    }
    
  }
  

