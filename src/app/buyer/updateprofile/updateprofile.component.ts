import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../front/navbar/navbar.component';
import { FotterComponent } from '../../front/fotter/fotter.component';
import { response } from 'express';

@Component({
  selector: 'app-updateprofile',
  standalone: false,

  templateUrl: './updateprofile.component.html',
  styleUrl: './updateprofile.component.css'
})
export class UpdateprofileComponent {

  passerrer:string=""
  usernameerrer:string=""
  emailerrer:string=""
  id:any=""

  myform = new FormGroup({
    name:new FormControl("",Validators.required),
    username : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    mobile:new FormControl("",[Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
    pass : new FormControl("",[Validators.required,Validators.minLength(5)]),
    conpass:new FormControl("",[Validators.required,Validators.minLength(5)]),
    addressh:new FormControl("",[Validators.required, Validators.minLength(5)]),
    profile:new FormControl("",Validators.required)
  })

  public get addressh() : any {
    return  this.myform.get("addressh")
  }
  public get profile() : any {
    return  this.myform.get("profile")
  }

  public get name() : any {
    return  this.myform.get("name")
  }
  public get email() : any {
    return  this.myform.get("email")
  }
  public get username() : any {
    return  this.myform.get("username")
  }
  public get pass() : any {
    return  this.myform.get("pass")
  }
  public get conpass() : any {
    return  this.myform.get("conpass")
  }
  public get mobile() : any {
    return  this.myform.get("mobile")
  }

  constructor(private service:DataserviceService, private router:Router,private activatedroute:ActivatedRoute)
  {
    this.service.getsingleuser(localStorage.getItem("userid")).subscribe((response:any)=>{
      console.log(response);
      this.myform.patchValue({
        name:response.name,
        username:response.username,
        email:response.email,
        pass:response.pass,
        conpass:response.conpass,
        addressh:response.addressh,
        profile:response.profile,
        mobile:response.mobile,
      
      })
      
    })
  }

  getInputFile1(e: any) {

    this.myform.patchValue({profile : `/assets/userprofile/${e.target.files[0].name}`})
      
    }


  postdata(){
   
    if(this.myform.value.pass !== this.myform.value.conpass){
   this.passerrer = "ConPass Does's not Match"
    }
    else{
       let  item = {
            name:this.myform.value.name,
            email:this.myform.value.email,
            username:this.myform.value.username,
            mobile:this.myform.value.mobile,
            pass:this.myform.value.pass,
            conpass:this.myform.value.conpass,
            role:"Buyer",
            addressh : this.myform.value.addressh,
            profile :this.myform.value.profile,
            id: localStorage.getItem("userid")
          }

          this.service.updateuser(item).subscribe((response:any)=>{
            this.router.navigate(['/buyer'])
          })
        }
      }
    }


