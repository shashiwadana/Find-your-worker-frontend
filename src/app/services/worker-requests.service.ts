import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import {ClientRequestResponseModel} from '../models/ClientRequest.model';
@Injectable({
  providedIn: 'root'
})
export class WorkerRequestsService {

  constructor(private http: HttpClient) { }
  getRequests(workerId): Observable<ClientRequestResponseModel>{
    return this.http.get<ClientRequestResponseModel>('http://localhost:3000/requests/pool/worker/' + workerId);
  }

  acceptRequest(requestId, workerId): Observable<any>{
    return this.http.post<any>('http://localhost:3000/requests/accept/' + requestId, {
      'WorkerId': workerId
    })
  }

}
