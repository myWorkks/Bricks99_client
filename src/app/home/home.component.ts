import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
searchEntry!:String
@Output()
outPutSearch:EventEmitter<String>=new EventEmitter<String>();
outputSearch(){
  this.outPutSearch.emit(this.searchEntry)
}
@Input() name!:String
}
