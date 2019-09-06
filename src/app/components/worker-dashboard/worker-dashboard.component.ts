import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{RequestService}from '../../services/request.service';
import {OngoingRequestModel,OngoingRequestModelResponse,CompletedRequestModel,CompletedRequestModelResponse,UpcomingRequestModel,UpcomingRequestModelResponse} from '../../models/request.model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.scss']
})
export class WorkerDashboardComponent implements OnInit {
  ongoingOrders:OngoingRequestModel[];
  completedOrders:CompletedRequestModel[];
  upcomingOrders:UpcomingRequestModel[];
  OrderId:number;
  constructor(private order:RequestService,
    private toastr: ToastrService,) { 
    
    this.order.get_ongoingRequests(localStorage.getItem('UserId')).subscribe((res:OngoingRequestModelResponse)=>{
      this.ongoingOrders=res.result[0];
      console.log(res.result[0]);
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

  startOrder(OrderId){
    const startTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    this.order.start_order(OrderId,startTime).subscribe(res=>{
      console.log(res);
    });
  }
  endOrder(OrderId){
    const endTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
     this.order.end_order(OrderId,endTime).subscribe(res=>{
       console.log(res);
       this.toastr.info("Order Ended");
     });
  }

}
