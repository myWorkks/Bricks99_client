import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../model/Property';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = []
  // properties: Property[] = [
  //   {
  //     "propertyId": 1,
  //     "propertyName": "Bharath niwas",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 1,
  //       "surveyNo": "87/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 2,
  //     "propertyName": "Laxmi niwas",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 2,
  //       "surveyNo": "88/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 3,
  //     "propertyName": "Laxmi niwas",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 3,
  //       "surveyNo": "89/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 4,
  //     "propertyName": "Reddy niwas",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 4,
  //       "surveyNo": "8/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 5,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 5,
  //       "surveyNo": "878/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 6,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 6,
  //       "surveyNo": "78/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 7,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 7,
  //       "surveyNo": "788/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 8,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 8,
  //       "surveyNo": "787/4a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 9,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 9,
  //       "surveyNo": "787/4ab",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 10,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 10,
  //       "surveyNo": "787/4ab/7",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 11,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 11,
  //       "surveyNo": "887/4ab/7",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 12,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 12,
  //       "surveyNo": "887/4a/7",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 13,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 13,
  //       "surveyNo": "887/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 14,
  //     "propertyName": "Akhila nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 14,
  //       "surveyNo": "877/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 15,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 15,
  //       "surveyNo": "777/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 16,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 16,
  //       "surveyNo": "8777/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 17,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 17,
  //       "surveyNo": "787/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 18,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 18,
  //       "surveyNo": "123/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 19,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 19,
  //       "surveyNo": "14/4a/8",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 20,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 20,
  //       "surveyNo": "56",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 21,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 21,
  //       "surveyNo": "55/4",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 22,
  //     "propertyName": "Reddy nilayam",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 22,
  //       "surveyNo": "87/9",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 23,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 23,
  //       "surveyNo": "87/9a",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 24,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 24,
  //       "surveyNo": "87/9b",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 25,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 25,
  //       "surveyNo": "87/9c",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 26,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 26,
  //       "surveyNo": "874",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 27,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 27,
  //       "surveyNo": "462",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 28,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 28,
  //       "surveyNo": "462/b",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 29,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 29,
  //       "surveyNo": "462/b1",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   },
  //   {
  //     "propertyId": 30,
  //     "propertyName": "Brundavan",
  //     "propertyType": "Apartment",
  //     "propertyPrice": 7500.0,
  //     "numberOfRooms": "3",
  //     "areaInSqft": 500.0,
  //     "propertyAddress": {
  //       "addressId": 30,
  //       "surveyNo": "462/2b",
  //       "locality": "medak",
  //       "pincode": "502311",
  //       "state": "telangana"
  //     },
  //     "sellerId": 1
  //   }
  // ]

  constructor(private route: Router, private adminService: AdminService) { }
  ngOnInit(): void {

    this.viewProperties(this.pgNumber, this.noOfEntriesPerPage)
  }
  // changeEntries(id: any) {
  //   this.noOfEntriesPerPage = id
  //   console.log(this.noOfEntriesPerPage);
  //   this.viewProperties
  // }
  buttonDisable:boolean=false
  noOfEntriesPerPage: number = 5
  pgNumber: number = 0
  navigateToProperty(propertyId: number) {
    this.route.navigate(['/seller/property/' + propertyId])
  }
  viewProperties(pgNo: number, entries: number) {
    this.adminService.viewAllPropertiesPg(entries, pgNo).subscribe(
      (data) => {
        this.properties = data
        this.buttonDisable=false
      },
      (error) => {
        console.log(error);
        this.buttonDisable=true

        this.pgNumber=this.pgNumber-1
      }
    )

  }
  changePg(ch: any) {

    console.log(ch)
    if (ch === '+') {

      this.pgNumber = this.pgNumber + 1
      console.log("if block");
      this.viewProperties(this.pgNumber, this.noOfEntriesPerPage)
    }
    else if (ch === '-') {
      if (this.pgNumber > 0) {

        this.pgNumber = this.pgNumber - 1
        console.log("else if block");
        this.viewProperties(this.pgNumber, this.noOfEntriesPerPage)
      }
    }
    else {
      this.pgNumber = ch
      console.log("else block");
      this.viewProperties(this.pgNumber, this.noOfEntriesPerPage)
    }


  }
}
