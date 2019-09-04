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

  getJobs():Observable<JobModelRes>{
    return this.http.get<JobModelRes>('http://localhost:3000/dataservices/getallskills');
  }
}

//.................service to get skills of workers.....
