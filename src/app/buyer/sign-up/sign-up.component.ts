import { Component } from '@angular/core';
import { NavbarComponent } from "../../front/navbar/navbar.component";
import { FotterComponent } from "../../front/fotter/fotter.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
 
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  passerrer:string=""
  usernameerrer:string=""
  emailerrer:string=""

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


  constructor(private service:DataserviceService , private router:Router){}




  getInputFile1(e: any) {

  this.myform.patchValue({profile : `/assets/user/${e.target.files[0].name}`})
    
  }

  postdata(){
   
    if(this.myform.value.pass !== this.myform.value.conpass){
   this.passerrer = "ConPass Does's not Match"
    }else{
      this.service.getUser().subscribe((response:any)=>{
        let item = response.find((x:any)=>x.username == this.myform.value.username || x.email == this.myform.value.email)
        if(item){
          this.usernameerrer = "Username is Already Exits";
          this.emailerrer = "Email is Already  Exits"

        }else{
          item = {
            name:this.myform.value.name,
            email:this.myform.value.email,
            username:this.myform.value.username,
            mobile:this.myform.value.mobile,
            pass:this.myform.value.pass,
            conpass:this.myform.value.conpass,
            role:"Buyer",
            addressh: this.myform.value.addressh,
            profile:this.myform.value.profile
          }

          this.service.createuser(item).subscribe((response:any)=>{
            this.router.navigate(['/buyer/login'])
          })
        }
      })
    }
  }}
  
  

