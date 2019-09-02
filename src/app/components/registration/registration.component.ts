import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import { FormControl } from '@angular/forms';
import{FormBuilder,Validators} from '../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  form;

  constructor(private _auth:AuthService,
              private fb: FormBuilder
  ) { 
    this.form=this.fb.group({
      username:['',[
        Validators.required,
        Validators.email
      ]],
        password:['',[
          Validators.required,
          Validators.minLength(8)
        ]],
        contactNumber:['',Validators.required],
        userType:['',Validators.required]

    });


  }
 

  ngOnInit() {
  }

registerSubmit(form){
console.log(form.value.username);
this._auth.registerUser(form.value.username,form.value.password,form.value.contactNumber,form.value.userType).subscribe(

);

}
 get username(){
   return this.form.get('username');
 }

 get password(){
  return this.form.get('password');
}
get contactNumber(){
  return this.form.get('contactNumber');
}


 
  }

