import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../Services/admin.service';
import { Property } from '../model/Property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  propertyId: any
  property: Property = new Property
  constructor(private activeRoute: ActivatedRoute, private adminService: AdminService) { }
  ngOnInit(): void {
    this.propertyId = this.activeRoute.snapshot.paramMap.get('id')
    console.log(this.propertyId);

    this.getPropertyDetails(this.propertyId)
  }
  getPropertyDetails(id: number) {
    this.adminService.viewProperty(id).subscribe((data) => {
      this.property = data


    }, (error) => {
      console.log(error);
    })
  }
  
}
