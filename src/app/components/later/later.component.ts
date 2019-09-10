import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{BookLaterService} from '../../services/book-later.service';
import{AuthService} from '../../services/auth.service';
import{WorkerModel, UserModel, WorkerModelRes} from '../../models/bookLater.model';
@Component({
  selector: 'app-later',
  templateUrl: './later.component.html',
  styleUrls: ['./later.component.scss']
})
export class LaterComponent implements OnInit {
  jobTypeId: number;
  date: string;
  startTime: string;
  endTime: string;
  private sub: any;
  latitude: string;
  longitude: string;
  location: string;
  noWorkers: boolean = false;

  isLogged;
  constructor(
    private  bookLaterService: BookLaterService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private auth:AuthService

  ) { }

  
  availableWorkers: WorkerModel[];
  requestDetails: UserModel[];
  ngOnInit() {
    this.latitude = '6.9128';
    this.longitude = '79.8507';
    
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.jobTypeId = +params['jobType'];
      this.date = params['date'];
      this.startTime = params['startTime'];
      this.endTime = params['endTime'];
      console.log(this.latitude);
      console.log(this.longitude);
      this.bookLaterService.getWorkers( localStorage.getItem('UserId'), this.location, this.jobTypeId, this.date, this.startTime, this.endTime, ).subscribe(
        res => {
          if(res.message ==="No workers available"){
            this.noWorkers = true;
            this.toastr.warning('Sorry, There are No Workers Available right now!', '', {
              timeOut: 3000,
              positionClass: 'toast-top-center'
            });
          }
          else{
            this.availableWorkers = res.result.Workers;
            console.log(res.result.Workers);
            this.requestDetails = res.result.User;
          }
         
        }
      );

    });

    if(this.auth.isLogged()===null){
      this.isLogged = false;
    }
    else{
      this.isLogged = true;
    }
    
   
  }
  sendRequest(){
    this.bookLaterService.sendRequest(this.requestDetails, this.availableWorkers).subscribe(
      res => {
        console.log("availableWorkers");
        console.log(this.availableWorkers);
        console.log(res);
        window.location.reload();
       // this.router.navigate(['/worker-search']);
        this.toastr.success('Request Sent Successfully', '', {
          timeOut: 3000,
          positionClass: 'toast-top-right'
        });
      }
    );
  }
}
  




  




