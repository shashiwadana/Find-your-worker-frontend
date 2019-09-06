import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{RequestService}from '../../services/request.service';
import {OngoingRequestModel,OngoingRequestModelResponse,CompletedRequestModel,CompletedRequestModelResponse,UpcomingRequestModel,UpcomingRequestModelResponse} from '../../models/request.model';
@Component({
  selector: 'app-worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.scss']
})
export class WorkerDashboardComponent implements OnInit {
  ongoingOrders:OngoingRequestModel[];
  completedOrders:CompletedRequestModel[];
  upcomingOrders:UpcomingRequestModel[];
  
  constructor(private order:RequestService) { 
    //localStorage.getItem('UserId')
    this.order.get_ongoingRequests(3).subscribe((res:OngoingRequestModelResponse)=>{
      this.ongoingOrders=res.result[0];
      console.log(res.result[0]);
    });

    this.order.get_completedRequests(3).subscribe((res:CompletedRequestModelResponse)=>{
      this.completedOrders=res.result[0];
      console.log(this.completedOrders[0]);
    });

    this.order.get_upcomingRequests(3).subscribe((res:UpcomingRequestModelResponse)=>{
      this.upcomingOrders=res.result[0];
      console.log(this.upcomingOrders[0]);
  
    });
  }

  ngOnInit() {
  }

}
