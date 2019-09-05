import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Location } from '../../models/base-loaction.model';
import { Job} from '../../models/worker-search.model';
import{Observable} from 'rxjs';
import { WokerDataService }from '../../services/woker-data.service';
import {WorkerProfile,WorkerProfileResponse} from '../../models/workerProfile.model'
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.scss']
})
export class WorkerProfileComponent implements OnInit {
  validatingForm: FormGroup;
  locations:Location[]=[
    {id:1, name:'Colombo'},
    {id:2, name:'Kandy'},
    {id:3, name:'Jaffna'}

  ];
 
  workerData:WorkerProfile[];
  
  constructor(private wdata:WokerDataService){
    this.wdata.get_workerData(localStorage.getItem('UserId')).subscribe((res:WorkerProfileResponse)=>{
    this.workerData=res.result[0];
    console.log(this.workerData[0]);
    });
  }
  
  ngOnInit() {
   
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalName: new FormControl('', Validators.required),
      loginFormModalContact: new FormControl('', Validators.required),
      loginFormModalBLocation: new FormControl('', Validators.required),
      loginFormModalRate: new FormControl('', Validators.required),
      loginFormModalDescription: new FormControl('', Validators.required),
    });
  }

  













  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalName() {
    return this.validatingForm.get('loginFormModalName');
  }
  get loginFormModalContact() {
    return this.validatingForm.get('loginFormModalContact');
  }
  get loginFormModalBLocation() {
    return this.validatingForm.get('loginFormModalBLocation');
  }
  get loginFormModalRate() {
    return this.validatingForm.get('loginFormModalRate');
  }
  get loginFormModalDescription() {
    return this.validatingForm.get('loginFormModalDescription');
  }








}