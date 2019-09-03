import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit {
  @Input() baseLocation: string;
  @Input() jobTypeId: string;
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  onclickBookNow(){
    console.log(this.jobTypeId);
    if(this.jobTypeId === undefined){
      console.log("Please select a job");
      this.toastr.warning('Please select a Job Type', 'Notice', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      })
    }
    else{
      //this.router.navigate(['client/map', {location: this.baseLocation, jobType: this.jobTypeId }]);
      console.log("Going to map");
    }
  }





}
