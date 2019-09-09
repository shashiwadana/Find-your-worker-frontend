import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{WorkerModelRes} from '../models/bookLater.model';

@Injectable({
  providedIn: 'root'
})
export class BookLaterService {

  constructor(private http: HttpClient) { }

  getWorkers(clientId, coordinates, jobType, date, startTime, endTime):Observable<WorkerModelRes>{
    return this.http.post<WorkerModelRes>('http://localhost:3000/bookLater/search',
    {'skillId': jobType, 
    'orderDate': date, 
    'startTime': startTime, 
    'endTime': endTime,
    'clientId': clientId, 
    'coordinates': coordinates, 
  }
  
  );
  }

  sendRequest(requestDetails, availableWorkers): Observable<WorkerModelRes>{
    return this.http.post<WorkerModelRes>('http://localhost:3000/bookLater/sendRequest', 
    {'User': requestDetails, 'Workers': availableWorkers });
  }

}
