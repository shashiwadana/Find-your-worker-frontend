import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Job } from '../../models/worker-search.model';
import { JobService } from '../../services/job.service';
@Component({
  selector: 'app-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss']
})
export class WorkerSearchComponent implements OnInit {
  
  
  constructor(private _job:JobService,
    private router:Router) 
              { 
                this._job.getJobs().subscribe(
                  res=>{ console.log(res.recordset);
                    this.jobs=res.recordset;
            
                  }
                 );
    
              }

      jobs:Job[];
      jobType:string;
      jobIdPassToBooking:number;
      date:string;
      startTime:string;
      endTime:string;
      baseLocation="moratuwa";


  ngOnInit() {
    
  }

  setjobIdPassToBooking() {
    for(const skill of this.jobs){
      if(skill.SkillTitle === this.jobType){
        this.jobIdPassToBooking = skill.SkillId;
      }
    }
    console.log(this.jobIdPassToBooking);
  }

}
