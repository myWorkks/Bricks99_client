import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerRegisration } from '../model/seller-regisration';
import { AdminService } from '../Services/admin.service';
import { Route, Router } from '@angular/router';
import { Property } from '../model/Property';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  sellers: SellerRegisration[]=[]
  status1: String[] = ["APPROVED", "REJECTED", "PENDING"]
  errorMessage!: String
  approveMessage!: String
  approveForm!: FormGroup
  statusForm!: FormGroup
  count!: number
 
  properties:Property[]=[]
  constructor(private fb: FormBuilder, private adminService: AdminService, private route: Router) {

    this.statusForm = this.fb.group({

      status: [null, Validators.required]
    })


  }
  ngOnInit(): void {

    this.viewSellers()
this.viewProperties()

  }
  navigateToSellers() {
    this.route.navigate(['sellers'])


  }
  viewProperties() {
    this.adminService.viewAllProperties().subscribe((data) => {
      this.properties=data

    },
      (error) => { console.log(error); }
    )
  }
  viewSellers() {





    this.adminService.viewSellers().subscribe(
      (data) => {

        this.sellers = data
    
        if (this.sellers != null) {
          this.count = Object.keys(this.sellers).length;


        
        }



      },



      (error) => {

        console.log(error.error.errorMessage);

      }

    )
    console.log("after subscribe");

    console.log(this.sellers);
    //  this.counting()


  }

  search() {
    console.log(this.statusForm.value)
  }

  navigateToProperty() {

    this.route.navigate(['/properties'])
  }





}

