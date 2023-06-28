import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-hub-login',
  templateUrl: './farm-hub-login.component.html',
  styleUrls: ['./farm-hub-login.component.css']
})
//'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
export class FarmHubLoginComponent  {
 loginForm!:FormGroup
 successMessage!:String
 errorMesage!:String
  constructor(private fb:FormBuilder,private adminService:AdminService,private route:Router) {
    this.  loginForm= this.fb.group({
      // uName: ['',Validators.required],
     pwd: ['',Validators.required],
      email:['',Validators.email],
   })}
  

  onSubmit(){
this.adminService.adminLogin(this.loginForm.value)

this.route.navigate(['home'])

  }
} 
