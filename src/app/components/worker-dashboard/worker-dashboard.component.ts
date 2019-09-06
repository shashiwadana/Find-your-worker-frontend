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
    this.order.get_ongoingRequests(localStorage.getItem('UserId')).subscribe((res:OngoingRequestModelResponse)=>{
      this.ongoingOrders=res.result[0];
      console.log(this.ongoingOrders[0]);
    });

    this.order.get_completedRequests(localStorage.getItem('UserId')).subscribe((res:CompletedRequestModelResponse)=>{
      this.completedOrders=res.result[0];
      console.log(this.completedOrders[0]);
    });

    this.order.get_upcomingRequests(localStorage.getItem('UserId')).subscribe((res:UpcomingRequestModelResponse)=>{
      this.upcomingOrders=res.result[0];
      console.log(this.upcomingOrders[0]);
  
    });
  }

  ngOnInit() {
  }

}
