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
    
    
  }

  ngOnInit() {
    this.order.get_ongoingRequests(localStorage.getItem('UserId')).subscribe((res:OngoingRequestModelResponse)=>{
      this.ongoingOrders=res.result[0];
      console.log(this.ongoingOrders[0]);
      console.log("ongoingOrders");
    });

    this.order.get_completedRequests(localStorage.getItem('UserId')).subscribe((res:CompletedRequestModelResponse)=>{
      this.completedOrders=res.result[0];
      console.log(this.completedOrders[0]);
      console.log("ongoingOrders1");
    });

    this.order.get_upcomingRequests(localStorage.getItem('UserId')).subscribe((res:UpcomingRequestModelResponse)=>{
      this.upcomingOrders=res.result[0];
      console.log(this.upcomingOrders[0]);
      console.log("ongoingOrders2");
  
    });
  }

  startOrder(orderId){
    const startTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
    console.log(startTime);
    this.order.start_order(orderId,startTime).subscribe(res=>{
      console.log(res);
      this.toastr.info("Order Started");
      window.location.reload();
    });
  }
  endOrder(OrderId){
    const endTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds();
     this.order.end_order(OrderId,endTime).subscribe(res=>{
       console.log(res);
       this.toastr.info("Order Ended");
       window.location.reload();
     });
  }
  getOrderId(orderId){
    this.OrderId = orderId;
  }

}
