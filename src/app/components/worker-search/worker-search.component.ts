import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Job } from '../../models/worker-search.model';
@Component({
  selector: 'app-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss']
})
export class WorkerSearchComponent implements OnInit {
  jobs:Job[]=[
    {id:1, name:'Plumber'},
    {id:2, name:'Nanny'},
    {id:3, name:'Doc'}

  ];
  constructor() { }

  ngOnInit() {
    
  }

}
