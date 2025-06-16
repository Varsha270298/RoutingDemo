import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingDemo';
  title1:string='BindingDemo';
  isDisabled:boolean=false;
  id:string='';
  username:string='';
  city:string='';
  getTitle1():string{
    return this.title1;
  
  }
 // getId():string{
   // return this.id;
 // }
  //getUsername():string{
    //return this.username;
  // }
  // getCity():string{
    // return this.city;
  // }
  saveData():void{
    console.log("data saved !!")
}
}
