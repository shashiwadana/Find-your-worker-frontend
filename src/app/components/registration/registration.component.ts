import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerUserData={}
  constructor() { }

  ngOnInit() {
  }
  registerUser(){
    console.log(this.registerUserData) 
  }
}
