import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-booklater',
  templateUrl: './booklater.component.html',
  styleUrls: ['./booklater.component.scss']
})
export class BooklaterComponent implements OnInit {
  
  @Input() baseLocation: string;
  @Input() jobTypeId: string;
  @Input() date: string;
  @Input() startTime: string;
  @Input() endTime: string;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    
  ) { }
 


  ngOnInit() {
   
  }
  onclickBookLater(){
    if(this.jobTypeId === undefined || this.date === undefined || this.startTime === undefined || this.endTime === undefined){
      this.toastr.warning('Please enter all the input fields', 'Notice', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    }
    else{
      this.router.navigate(['/later', {jobType: this.jobTypeId, date: this.date, startTime: this.startTime, endTime: this.endTime}]);
    }
    
  }
}
