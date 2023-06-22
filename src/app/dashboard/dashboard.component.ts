import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerRegisration } from '../model/seller-regisration';
import { AdminService } from '../Services/admin.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {
  sellers!: any
  status1: String[] = ["APPROVED", "REJECTED", "PENDING"]
  errorMessage!: String
  approveMessage!: String
  approveForm!: FormGroup
  statusForm!: FormGroup
  count!: Number
  constructor(private fb: FormBuilder, private adminService: AdminService, private route: Router) {

    this.statusForm = this.fb.group({

      status: [null, Validators.required]
    })


  }
  ngOnInit(): void {

    this.viewSellers()


  }
  navigateToSellers() {
    this.route.navigate(['sellers'])


  }

  viewSellers() {





    this.adminService.viewSellers().subscribe(
      (data) => {

        this.sellers = data
        console.log(this.sellers);
        console.log("data invoked");
        if (this.sellers != null) {
          this.count = Object.keys(this.sellers).length;


          console.log(this.count);
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







}

