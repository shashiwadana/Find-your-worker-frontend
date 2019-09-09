import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ServerResponse} from '../models/booknowresponse.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }
  getNearbyWorkers(jobType,clientId, clientCoordinate): Observable<ServerResponse>{
    return this.http.post<ServerResponse>(
      'http://localhost:3000/booknow/booknow',
      {'jobType': jobType, 'clientId':clientId,'clientCoordinate': clientCoordinate}
    );
  }

  sendJobRequest(jobTypeId, clientId, workers,location): Observable<ServerResponse>{
    return this.http.post<ServerResponse>(
      'http://localhost:3000/booknow/sendUrgentRequest', {jobTypeId, clientId, workers,location}
    );
  }





}
