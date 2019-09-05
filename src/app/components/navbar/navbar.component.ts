import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: AuthService) { }
  isLogged;
  ngOnInit() {
    if(this.userService.isLogged()=== null){
      this.isLogged = false;
    }
    else{
      this.isLogged = true;
    }
  }

}
   