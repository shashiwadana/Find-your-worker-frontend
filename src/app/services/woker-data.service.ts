import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WokerDataService {

  constructor(private httpClient:HttpClient) { }
  user:string=localStorage.getItem('UserId');
   
    get_workerData(user){
      return this.httpClient.get('http://localhost:3000/worker/profile/'+localStorage.getItem('UserId'));
    }

}
