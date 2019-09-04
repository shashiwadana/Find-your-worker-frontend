import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import{CompletedServicesService} from '../../services/completed-services.service';
import { CompletedOrder,CompletedOrderResponse} from '../../models/completedOrders';
@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.scss']
})
export class ClientOrdersComponent implements OnInit {
  
   clientOrders: CompletedOrder[];

  constructor(private comp:CompletedServicesService) {
  
    this.comp.get_completedOrders( localStorage.getItem('UserId')).subscribe((res:CompletedOrderResponse)=>{
      
      this.clientOrders = res.result[0];
      console.log(this.clientOrders[2]);
    });

   }

  ngOnInit() {
  }

}
