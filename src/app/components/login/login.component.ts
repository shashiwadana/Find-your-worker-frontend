import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import{FormBuilder,Validators} from '../../../../node_modules/@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private _login:AuthService,
              private fb:FormBuilder,
              private toastr:ToastrService,
              private router:Router,
  ) {

    this .form = this .fb .group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
    });

   }

   loginSubmit() {
    this._login.loginUser(this.username.value, this.password.value).subscribe(
      result => {
        if (result.status === 200 && result.message === 'Authorized') {
          this.toastr.success('Login Success');
          localStorage.setItem('sessionEmail', result.result.sessionEmail);
          localStorage.setItem('sessionType', result.result.sessionType);
          if (result.result.sessionType === 'worker') {
            this.router.navigate(['worker']);
          } else {
            this.router.navigate(['']);
          }
        } else {
          this.form.reset();
          this.toastr.error('Login Failed');
        }
      }
    );
  }

  






  ngOnInit() {
  }
  get username() {return this.form.get('username'); }
  get password() {return this.form.get('password'); }

}
