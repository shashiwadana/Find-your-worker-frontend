import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged:boolean;
  constructor(private auth: AuthService,
              private router: Router) { }
 
  ngOnInit() {
    if(this.auth.isLogged()=== null){
      this.isLogged = false;
    }
    else{
      this.isLogged = true;
    }
  }

  navigateToProfile(){
    if(this.auth.getUserType()==='worker'){
      this.router.navigate(['worker-profile']);
    }
    else{
      this.router.navigate(['client-profile']);
    }
  }

  logout(){
    this.auth.logout();
    localStorage.removeItem('sessionEmail');
    localStorage.removeItem('sessionType');
    localStorage.removeItem('UserId');
    this.router.navigateByUrl('/login');
   
    
  }




}
   