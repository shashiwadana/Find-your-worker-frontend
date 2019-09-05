import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WokerDataService {

  constructor(private http:HttpClient) { }
  //user:string=localStorage.getItem('UserId');
   
  getWorkerDetails(workerId): Observable<any>{
    return this.http.get<any>('http://localhost:3000/worker/profile/' + workerId);
  }


  updateWorkerDetails(workerId, FirstName, LastName, BaseLocation, ContactNo): Observable<any>{
    return this.http.put<any>('http://localhost:3000/worker/profile/' + workerId, {
      'fname': FirstName, 'lname': LastName, 'baseL': BaseLocation, 'contactno': ContactNo
    });
  }
  
  /*
  updateProfileImage(workerId, imgUrl): Observable<any>{
    return this.http.put<any>('http://localhost:3000/worker/profile/picture/' +workerId, {
      'imgURL': imgUrl
    });
  }
  deleteSkill(workerId, skillId): Observable<any>{
    return this.http.delete<any>('http://localhost:3000/worker/skill/' + workerId, {
      
    });
  }

  addSkill(workerId, skillObj): Observable<any>{
    console.log(skillObj);
    return this.http.post<any>('http://localhost:3000/worker/skill/'+ workerId, {
      'skillObj': {skillObj}
    })
  }

  updateSkill(workerId, skillObj): Observable<any>{
    return this.http.put<any>('http://localhost:3000/worker/skill/' + workerId, {
      'skillObj': {skillObj}
  })
  }
  */

}
