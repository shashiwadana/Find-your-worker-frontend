import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import { FormControl } from '@angular/forms';
import{FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  form;

  constructor(private _auth:AuthService,
              private fb: FormBuilder,
              private toastr:ToastrService,
              private router:Router,
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
  result => {
    console.log(result);
    if (result.status === 201) {
      this.toastr.success('User Registerd Succesfully');
      this.router.navigate(['login']);
    } else {
      this.toastr.error('User registration Failed', result.message);
    }
  }
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

