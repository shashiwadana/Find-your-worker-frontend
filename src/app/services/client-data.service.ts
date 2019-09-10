import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(private http:HttpClient) { }
  getClientDetails(workerId): Observable<any>{
    return this.http.get<any>('http://localhost:3000/client/profile/' + workerId);
  }


  updateClientDetails(workerId, FirstName, LastName, BaseLocation, ContactNo): Observable<any>{
    return this.http.put<any>('http://localhost:3000/client/profile/' + workerId, {
      'fname': FirstName, 'lname': LastName, 'baseL': BaseLocation, 'contactno': ContactNo
    });
  }
  
}
