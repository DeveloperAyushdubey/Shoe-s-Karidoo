import { CommonModule  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  login:boolean = false
  name:any=""
  role:any=""


  constructor(private router:Router){}

  ngOnInit(){
    this.login = localStorage.getItem("login") == "true"?true:false
    this.name = localStorage.getItem("name")? localStorage.getItem("name") :''
    this.role = localStorage.getItem("role") ? localStorage.getItem("role") :''
  }


  logout(){
    localStorage.removeItem("login")
    localStorage.removeItem("name")
    localStorage.removeItem("userid")
    localStorage.removeItem("role")
    this.router.navigate(['/buyer/login'])
  
  }

}
