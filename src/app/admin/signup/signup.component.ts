import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
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
    profile:new FormControl("",Validators.required),
    city:new FormControl("",Validators.required),
    state:new FormControl("",Validators.required),
    country:new FormControl("",Validators.required),
    storename:new FormControl("",Validators.required),
    storephoto:new FormControl("",Validators.required)

  })


  public get storename() : any {
    return  this.myform.get("storename")
  }
  public get storephoto() : any {
    return  this.myform.get("storephoto")
  }

  public get city() : any {
    return  this.myform.get("city")
  } 
   public get state() : any {
    return  this.myform.get("state")
  }
  public get country() : any {
    return  this.myform.get("country")
  }


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


  constructor(private service:DataserviceService,private router:Router){}



  getInputprofile(e:any){
    this.myform.patchValue({profile :`/assets/userprofile/${e.target.files[0].name}`})
  }
  getInputStoreimage(e:any){
    this.myform.patchValue({storephoto :`/assets//${e.target.files[0].name}`})

  }



  postdata(){
    alert("hello")
     if(this.myform.value.pass !== this.myform.value.conpass)
      {
   this.passerrer = "ConPass Does's not Match"
  }
    let item ={
      name:this.myform.value.name,
      username : this.myform.value.username,
      email : this.myform.value.email,
      mobile:this.myform.value.mobile,
      pass : this.myform.value.pass,
      conpass:this.myform.value.conpass,
      addressh:this.myform.value.addressh,
      profile:this.myform.value.profile,
      city:this.myform.value.city,
      state:this.myform.value.state,
      country:this.myform.value.country,
      storename:this.myform.value.storename,
      storephoto:this.myform.value.storephoto,
      role:"Admin"
    }
    this.service.createAdmin(item).subscribe((response:any)=>{
      this.router.navigate(['/admin'])
    })
  }
  }
