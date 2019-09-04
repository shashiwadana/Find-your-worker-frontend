import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ServerResponse} from '../models/booknowresponse.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }
  getNearbyWorkers(jobType, baseLocation): Observable<ServerResponse>{
    return this.http.post<ServerResponse>(
      'http://localhost:3000/booknow/booknow',
      {'jobType': jobType, 'baseLocation': baseLocation}
    );
  }

  sendJobRequest(jobTypeId, clientId, workers): Observable<ServerResponse>{
    return this.http.post<ServerResponse>(
      'http://localhost:3000/booknow/sendUrgentRequest', {jobTypeId, clientId, workers}
    );
  }





}
