import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Job, JobModelRes} from '../models/worker-search.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  //private _url:string=""
  constructor(private http:HttpClient) { }

  getJobs(){
    return this.http.get<JobModelRes>('http://localhost:3000/dataservices/getallskills');
  }
  getAllLocations(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/dataservices/getalllocations');
  }
}

//.................service to get skills of workers.....
