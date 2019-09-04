import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompletedServicesService {

  constructor(private httpClient:HttpClient) { }

  get_completedOrders(clientId){
    return this.httpClient.get('http://localhost:3000/completedorders/owner/completedorders/' +clientId);
  }
}
