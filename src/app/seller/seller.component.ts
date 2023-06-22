import { Component ,OnInit} from '@angular/core';
import { SellerRegisration } from '../model/seller-regisration';
import { AdminService } from '../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit{
  approveDisableButton:boolean=false
  rejectDisableButton:boolean=false
seller!:SellerRegisration
id!:any
approveMessage!:String
errorMessage!:String
display:boolean=false
constructor(private adminService:AdminService,private route:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
  this.id=  this.activatedRoute.snapshot.paramMap.get('id')
    this.viewSeller(this.id)
  }


viewSeller(id:Number){
this.adminService.viewDetails(id).subscribe(
  (data)=>{
    this.seller=data
  },
  (error)=>{
    this.errorMessage=error.error.errorMessage
  }
)

}

approve(id: Number) {
console.log("approved");

 this.approveDisableButton=true;
 this.rejectDisableButton=false;
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
  this.display=true
}
deny(id:Number) {
  console.log("denied");
  this.approveDisableButton=false;
  this.rejectDisableButton=true
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

  this.display=true
}
goBack(){
  this.route.navigate(['sellers'])
}
}
