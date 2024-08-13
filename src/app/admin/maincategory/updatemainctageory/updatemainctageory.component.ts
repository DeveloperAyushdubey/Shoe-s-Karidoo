import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../../service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query, response } from 'express';

@Component({
  selector: 'app-updatemainctageory',
  standalone: false,
  templateUrl: './updatemainctageory.component.html',
  styleUrl: './updatemainctageory.component.css'
})
export class UpdatemainctageoryComponent {

  myform = new FormGroup({
    name: new FormControl("",Validators.required),
    status : new FormControl("")
  })
  id:any=""


  constructor(private service:DataserviceService , private activatedroute:ActivatedRoute,private router:Router){
    this.activatedroute.queryParams.subscribe((params:any)=>{
this.id = params.id
this.service.getsinglemaincategory(this.id).subscribe((response:any)=>{
  this.myform.patchValue({
    name:response.name,
    status:response.status
  })
})

    })
  }

  
  public get name() : any {
    return  this.myform.get("name")
  }

updatedata(){
  let item = {
    name:this.myform.value.name,
    status:this.myform.value.status ? "Active":"Inactive",
    id:this.id
  }
this.service.updatemaincategory(item).subscribe((response:any)=>{
  alert("Data Update")
this.router.navigate(['/admin/maincategory'])
})
}
  
}
