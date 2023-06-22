import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerRegisterService } from '../model/service/seller-register.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {

registerForm!:FormGroup
successMessage!:any
errorMesage!:String
states:String[]=["AP","TS","MH"]
  constructor(private fb: FormBuilder,private sellerService:SellerRegisterService) { 
   
this.  registerForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email:['',Validators.email],
    contact:['',Validators.required],
    password:['',Validators.required],
    adhaar:['',Validators.required],
   

    address: this.fb.group({
      addressline1:['',Validators.required],
      addressline2:['',Validators.required],
    
      city: ['',Validators.required],
      state: ['',Validators.required],
      pincode: ['',Validators.required]
    }),
  });
  }
  

 
  
  onSubmit():any{
    
    console.log(this.registerForm.value)
    this.sellerService.register(this.registerForm.value).subscribe(
      (data)=>{console.log("printing data");
      
        console.log(data);
      console.log("printed data");
      
        this.successMessage=data},
      (error)=>{
        console.log("printing error");
        
        console.log(error);
        console.log("printed error");
      // this.successMessage=error.error.text
        this.errorMesage=error.error.errorMessage
      }
    )
  }
 
}

