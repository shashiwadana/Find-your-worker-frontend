
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private _registerUrl="http://localhost:3000/user/register";
  
  
  
  
  
  
  
  constructor(private http:HttpClient) { }
  registerUser(username, password, mobile, type): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user/register', {
      UserEmail: username,
      Password: password,
      ContactNumber: mobile,
      UserType : type
    });
  

}
}