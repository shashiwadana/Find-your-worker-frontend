import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompletedServicesService {

  constructor(private httpClient:HttpClient) { }
  user:string=localStorage.getItem('UserId');
  get_completedOrders(user){
    return this.httpClient.get('http://localhost:3000/completedorders/owner/completedorders/' + localStorage.getItem('UserId'));
  }
}
