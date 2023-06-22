import { Component, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { SellerRegisration } from '../model/seller-regisration';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
 selectedStatus!:String
  display:boolean=false
  count!: number
sellers!:SellerRegisration[]
filteredSellers!:SellerRegisration[]
seller1!:SellerRegisration
errorMessage!:String
sellerStatus:String="ALL"
constructor(private adminService:AdminService,private route:Router){}
  ngOnInit(): void {
 
  this.viewSellers()
 
  
  }
changeSellerStatus(data:String){
  this.sellerStatus=data
console.log(this.sellerStatus);


}

viewDetails(id:Number){
this.route.navigate(['sellers/seller/'+id])
  this.display=true
  this.adminService.viewDetails(id).subscribe(
    
    (data)=>{
  this.seller1=data
console.log(this.seller1);

},
  (error)=>this.errorMessage=error.error.errorMessage
  
  
  )

}

  viewSellers() {
   
  
 
     this.adminService.viewSellers().subscribe(
       (data) => this.sellers = data,
 

 
       (error) => {
        console.log(error.error.errorMessage);
          this.errorMessage =error.error.errorMessage
       }
 
     )
     
     
   }
getTotalSellers(){
 
  
return this.sellers.length
}
getPendingSellers(){
return  this.sellers.filter(t=>t.status==='PENDING').length
}
getApprovedSellers(){
  return  this.sellers.filter(t=>t.status==='APPROVED').length
}
getRejectedSellers(){
  return  this.sellers.filter(t=>t.status==='REJECTED').length
}
// viewSellersByStatus(status:String){
// if(status==="ALL"){

//   this.filteredSellers= this.viewSellers()
// }
// else{
//   this.filteredSellers=this.viewSellers().filter(t=>t.status===status)
// }

// }
  
  

  


 
 
   
   counting() {
    
     console.log("entered counting method");
     if (this.sellers != null) {
       this.count = Object.keys(this.sellers).length;
       console.log("counted");
 
       console.log(this.count);
     }
 
     else {
     
 console.log("sellers is empty");
 
     }
   
     
   }
 
   

}
