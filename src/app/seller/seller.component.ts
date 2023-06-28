import { Component, OnInit } from '@angular/core';
import { SellerRegisration } from '../model/seller-regisration';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/Property';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  properties: Property[]=[]


  profilePath:string=''
  adhaarPath:string=''
  approveDisableButton: boolean = false
  rejectDisableButton: boolean = false
  seller: SellerRegisration= new SellerRegisration()
  sellerId: any
  approveMessage!: String
  errorMessage!: String
  display: boolean = false
  constructor(private adminService: AdminService, private route: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.sellerId = this.activatedRoute.snapshot.paramMap.get('id')
    this.viewSeller(this.sellerId)
    this.viewProperties(this.sellerId)
    this.adhaarPath="assets/sellers/adhaarcards/sellerId_adhaar"
    + this.sellerId + ".jpg"
    this.profilePath="assets/sellers/Profiles/profile"+ this.sellerId + ".jpg"
    console.log(this.profilePath);
    //assets/sellers/Profiles/profile1.jpg

    //assets/sellers/Profiles/profile1.jpg
  }

  viewProperties(sellerId: number) {

    this.adminService.viewProperties(sellerId).subscribe(
      
      (data) => {
         console.log(data);
this.properties=data

     },
      (error) => {
        console.log(error);

      }
    )
  }
  navigateToProperty(propertyId:number){
    console.log(propertyId);
    console.log("invoked navigation");
    
    
    this.route.navigate(['/seller/property/'+propertyId])
  }
  viewSeller(id: Number) {
    this.adminService.viewDetails(id).subscribe(
      (data) => {
        this.seller = data
        console.log(data);
        
      },
      (error) => {
        this.errorMessage = error.error.errorMessage
      }
    )

  }

  approve(id: Number) {
    console.log("approved");

    this.approveDisableButton = true;
    this.rejectDisableButton = false;
    console.log(id);

    this.adminService.approveSeller(id).subscribe(
      (data) => {
        this.approveMessage = data
        console.log(data);

      },


      (error) => {

        this.errorMessage = error.error.text
        console.log(error);

      }

    )
    this.display = true
  }
  deny(id: Number) {
    console.log("denied");
    this.approveDisableButton = false;
    this.rejectDisableButton = true
    console.log(id);

    this.adminService.denySeller(id).subscribe(
      (data) => {
        this.approveMessage = data
        console.log(data);

      },


      (error) => {

        this.errorMessage = error.error.text
        console.log(error);

      }

    )

    this.display = true
  }
  goBack() {
    this.route.navigate(['sellers'])
  }


  viewDetails(id: Number) {
    this.route.navigate(['sellers/seller/' + id])
    this.display = true
    this.adminService.viewDetails(id).subscribe(

      (data) => {

        console.log(data);

      },
      (error) => this.errorMessage = error.error.errorMessage


    )

  }
}
