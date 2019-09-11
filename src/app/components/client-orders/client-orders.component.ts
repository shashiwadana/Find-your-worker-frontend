import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{CompletedServicesService} from '../../services/completed-services.service';
import { Router } from '@angular/router';
import { CompletedOrder,CompletedOrderResponse,CancelledOrder,CancelledOrderResponse,AcceptedOrder,AcceptedOrderResponse} from '../../models/completedOrders';
@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.scss']
})
export class ClientOrdersComponent implements OnInit {
  
   clientOrders: CompletedOrder[];
   cancelledOrders: CancelledOrder[];
   acceptedOrders:AcceptedOrder[];

  constructor(private comp:CompletedServicesService, private router:Router,) {
  
    this.comp.get_completedOrders( localStorage.getItem('UserId')).subscribe((res:CompletedOrderResponse)=>{
      
      this.clientOrders = res.result[0];
      console.log(this.clientOrders[0]);
    });

    this.comp.get_cancelledOrders( localStorage.getItem('UserId')).subscribe((res:CancelledOrderResponse)=>{
      
      this.clientOrders = res.result[0];
     // console.log(this.cancelledOrders[0]);
    });

    this.comp.get_acceptedOrders( localStorage.getItem('UserId')).subscribe((res:AcceptedOrderResponse)=>{
      
      this.clientOrders = res.result[0];
     // console.log(this.cancelledOrders[0]);
    });


   }

  ngOnInit() {
  }

}
