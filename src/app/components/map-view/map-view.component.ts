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
  location:string='';
  private sub: any;
  noAvailableWorkers:boolean=false;

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
      if(this.userService.isLogged()=== null){
        this.isLogged = false;
      }
      else{
        this.isLogged = true;
      }
      this.mapService.getNearbyWorkers(this.jobTypeId, this.clientId,this.location).subscribe(
        res => {
          this.workersRealTime = res.result.workers;
          this.lat = res.result.centerOfMap.latitude;
          this.lng = res.result.centerOfMap.longitude;
          console.log(this.workersRealTime);
          if(this.workersRealTime.length==0){
            this.noAvailableWorkers=true;
            this.toastr.info('', 'No available Workers', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
          else{
            this.toastr.info('', 'Click on locators to see availble workers', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        }
      );

    });
    
    //Tostr Service...............
    

   
  }
  navigateToSearch(){
    this.router.navigate(['/worker-search']);
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  sendRequest() {
    const location = '6.7881,6.7881';
    this.mapService.sendJobRequest(this.jobTypeId, this.clientId, this.workersRealTime,this.baseLocation).subscribe(
      res => {
        console.log(res);
        console.log("map request sent");
      }
    );


  }
 


}
