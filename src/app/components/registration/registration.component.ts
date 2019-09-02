import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerUserData={}

  
  constructor(private _auth:AuthService) { }
  //constructor() { }

  ngOnInit() {
  }
  
  registerUser(){
   //  console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)

    ) 
    //console.log(this.registerUserData)
  }
}
