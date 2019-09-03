import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Job } from '../../models/worker-search.model';
import { JobService } from '../../services/job.service';
@Component({
  selector: 'app-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss']
})
export class WorkerSearchComponent implements OnInit {
  public jobs=[];
  constructor(private _job:JobService) { }

  ngOnInit() {
    this._job.getJobs().subscribe(
      res=>{ console.log(res.recordset);
        this.jobs=res.recordset;

      }
     );
  }

}
