import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brick99';


  contentFromChild!:String

  contentFromChild1(data:String){
    this.contentFromChild=data
  }

  name:String="BHarath"
}
