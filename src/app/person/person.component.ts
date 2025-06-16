import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
 
  personForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',[Validators.required,Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    gender: new FormControl(),
   
    country: new FormControl()
  })
  get firstname(){
    return this.personForm.get('firstname');
  }
  get lastname(){
    return this.personForm.get('lastname');
  }
  get email(){
    return this.personForm.get('email');
  }
  get country(){
    return this.personForm.get('country');
  }
  get gender(){
    return this.personForm.get('gender');
  }
    countryList:string[]=['india','japan','ireland']
  constructor() { }
  ngOnInit(): void {
  }
 
onSubmit() {
  console.log(this.personForm.value);
}
}