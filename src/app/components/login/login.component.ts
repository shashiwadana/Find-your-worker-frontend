import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import{FormBuilder,Validators} from '@angular/forms';
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

   loginSubmit(form) {
    this._login.loginUser(this.username.value, this.password.value).subscribe(
      result => {
        console.log(result);
        if (result.status === 200 && result.message === 'Authorized') {
          this.toastr.success('Login Success','Notice', {
            timeOut: 6000,
            positionClass: 'toast-top-right',
          });
          localStorage.setItem('sessionEmail', result.result.sessionEmail);
          localStorage.setItem('sessionType', result.result.sessionType);
          localStorage.setItem('UserId', result.result.UserId);
          if (result.result.sessionType === 'worker') {
            this.router.navigate(['worker-dashboard']);
            window.location.reload();
          } else {
            this.router.navigate(['worker-search']);
            window.location.reload();
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
