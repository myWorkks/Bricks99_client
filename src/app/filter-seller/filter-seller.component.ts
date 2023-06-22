import { Component, EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'app-filter-seller',
  templateUrl: './filter-seller.component.html',
  styleUrls: ['./filter-seller.component.css']
})
export class FilterSellerComponent {
selectedStatus:String="ALL"
@Output()
statusChange:EventEmitter<String>= new EventEmitter<String>
@Input()
allCount:number=0
@Input()
pendingCount:number=0
@Input()
rejectedCount:number=0
@Input()
approvedCount:number=0
statusChangeEmitter(){
  console.log("emitter invoked");
  
this.statusChange.emit(this.selectedStatus)
}
changeStatusToAll(){
  console.log("button clicked");
  
  this.selectedStatus="ALL"
}
invokeTwoMethods(evet:any){
  console.log(evet.value);
  
  this.changeStatusToAll()
  this.statusChangeEmitter()
  console.log("invoked two methods");
  
}

}
