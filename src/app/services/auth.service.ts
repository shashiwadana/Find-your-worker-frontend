
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import{LoginResponse,RegisterResponse} from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(private http:HttpClient) { }
  
  loginUser(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:3000/user/login', {UserEmail: username, Password: password});
  }
  registerUser(username, password, mobile, type): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://localhost:3000/user/register', {
      UserEmail: username,
      Password: password,
      ContactNumber: mobile,
      UserType : type
    });
  
}
logout() {
  return this.http.post('http://localhost:3000/user/logout', {});
}

isLogged() {
  if (localStorage.getItem('sessionEmail') === null) {
    return false;
  }
  return true;
}

getUserType() {
  return localStorage.getItem('sessionType');
}






}