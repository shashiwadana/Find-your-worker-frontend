import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{RequestService}from '../../services/request.service';
import {OngoingRequestModel,OngoingRequestModelResponse} from '../../models/request.model';
@Component({
  selector: 'app-worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.scss']
})
export class WorkerDashboardComponent implements OnInit {
  ongoingOrders:OngoingRequestModel[];
  constructor(private order:RequestService) { 
    this.order.get_ongoingRequests(localStorage.getItem('UserId')).subscribe((res:OngoingRequestModelResponse)=>{
      this.ongoingOrders=res.result[0];
      console.log(this.ongoingOrders[0]);
    });
  }

  ngOnInit() {
  }

}
