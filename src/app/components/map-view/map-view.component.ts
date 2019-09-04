import { Component, OnInit } from '@angular/core';
import{WorkerLocationRealTime} from '../../models/bookNow.model'; 
import{MapService} from '../../services/map.service';
import{ActivatedRoute,Router} from '@angular/router';
import{ ToastrService} from 'ngx-toastr'
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  jobTypeId: number;
  baseLocation: string;
  clientId: number;
  private sub: any;

  lat;
  lng;

  isLogged;

  url = '';

  constructor(
    private mapService: MapService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private userService: AuthService
  ) { }

  workersRealTime:WorkerLocationRealTime[];
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.jobTypeId = +params['jobType'];
      this.baseLocation = params['location'];
      this.mapService.getNearbyWorkers(this.jobTypeId, this.baseLocation).subscribe(
        res => {
          this.workersRealTime = res.result.workers;
          this.lat = res.result.centerOfMap.latitude;
          this.lng = res.result.centerOfMap.longitude;
          console.log(this.workersRealTime);
        }
      );

    });
    
    //Tostr Service...............
    this.toastr.info('', 'Click to view Worker Summary', {
      timeOut: 3000,
      positionClass: 'toast-top-right',
    });

    if(this.userService.isLogged()=== null){
      this.isLogged = false;
    }
    else{
      this.isLogged = true;
    }
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  sendRequest() {
    this.mapService.sendJobRequest(this.jobTypeId, this.clientId, this.workersRealTime).subscribe(
      res => {
        console.log(res);
      }
    );









  }

}
