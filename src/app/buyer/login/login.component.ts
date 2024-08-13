import { Component } from '@angular/core';
import { NavbarComponent } from "../../front/navbar/navbar.component";
import { FotterComponent } from "../../front/fotter/fotter.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../../service/dataservice.service';
import { response } from 'express';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passerrer:string=""
  usernameerrer:string=""
  emailerrer:string=""



  myform = new FormGroup({
   username : new FormControl("",Validators.required),
    pass : new FormControl("",[Validators.required,Validators.minLength(5)]),
   role:new FormControl("",Validators.required)
  })

  

  public get username() : any {
    return  this.myform.get("username")
  }
  public get pass() : any {
    return  this.myform.get("pass")
  }
  public get role() : any {
    return  this.myform.get("role")
  }




  constructor(private service:DataserviceService , private router:Router){}


  postdata(){
  debugger
   if(this.myform.value.role =="Buyer"){
   this.service.getUser().subscribe((response:any)=>{
    let item = response.find((x:any)=>x.username == this.myform.value.username || x.email == this.myform.value.username)
    if(!item ){
      this.passerrer = "Pass Is Invalid"
    }else{
      localStorage.setItem("login","true")
      localStorage.setItem("name",item.name)
      localStorage.setItem("userid",item.id)
      localStorage.setItem("role",item.role)

      this.router.navigate(['/buyer'])
      
    }
   })
  }else{
    if(this.myform.value.role =="Admin"){
      this.service.getAdmin().subscribe((response:any)=>{
        let item = response.find((x:any)=>x.username == this.myform.value.username || x.email == this.myform.value.username)
        if(!item){
          this.passerrer = "Pass Is Invalid"
        
        }else{
          localStorage.setItem("login","true")
          localStorage.setItem("name",item.name)
          localStorage.setItem("userid",item.id)
          localStorage.setItem("role",item.role)
    
          this.router.navigate(['/admin'])
          
        }
      })
    }
  }
  }}

