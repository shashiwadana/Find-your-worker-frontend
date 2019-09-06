import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient:HttpClient) { }
  user:string=localStorage.getItem('UserId');

  get_ongoingRequests(user){
    return this.httpClient.get('http://localhost:3000/ordersWorker/getOngoingOrders/'+user);
  };
  get_completedRequests(user){
    return this.httpClient.get('http://localhost:3000/ordersWorker/getCompletedOrders/'+user);
  };
  get_upcomingRequests(){};


}
