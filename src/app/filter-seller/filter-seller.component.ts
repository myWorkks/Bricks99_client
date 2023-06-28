import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-filter-seller',
  templateUrl: './filter-seller.component.html',
  styleUrls: ['./filter-seller.component.css']

})
export class FilterSellerComponent {
  @Input()
  allCount: number = 0
  @Input()
  pendingCount: number = 0
  selectedStatus: String = 'ALL'
  @Input()
  rejectedCount: number = 0
  @Input()
  approvedCount: number = 0
  @Output()
  statusChange: EventEmitter<String> = new EventEmitter<String>()

  statusChangeEmitter() {
    this.statusChange.emit(this.selectedStatus)
  }
}