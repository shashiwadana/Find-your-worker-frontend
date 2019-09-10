import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import { Location } from '../../models/base-loaction.model';
import { Job} from '../../models/worker-search.model';
import{Observable} from 'rxjs';
import { WokerDataService }from '../../services/woker-data.service';
import {WorkerProfileModel,SkillsModel} from '../../models/workerProfile.model';
import{AuthService} from '../../services/auth.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { identifierModuleUrl } from '@angular/compiler';
//import{Job} from '../../models/worker-search.model'
@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.scss']
})
export class WorkerProfileComponent implements OnInit {

  
 
  isWorker;
  isEditing: boolean = false;
  form:FormGroup;
  workerData:WorkerProfileModel;
  //skillList:Job;


  Email:string;
  FirstName: string;
  LastName: string;
  ContactNumber:  string;
  BaseLocation: string;
  ImgUrl: string;
  private sub: any;
  id: number;
  //Status: number = 1;
  //SkillObj;
  //SkillTitle: string;
  //SkillId: number;
  //Description: string;
  //HourlyRate: number;
  //SysSkills: Job[];
  //SysLocations: string[];
  //addSkillForm;

  constructor(private wdata:WokerDataService,
              private auth:AuthService,
              private route:ActivatedRoute,
              private router:Router,
              private toaster:ToastrService,
              private fb:FormBuilder,
              //private dataService:Job
             
            ){
              this.form=this.fb.group({
                firstName:[''],
                lastName:[''],
                email:[''],
                contactNo:[''],
                location:['']
               
              });

              this.wdata.getWorkerDetails(localStorage.getItem('UserId')).subscribe(
                res=>{
                  this.workerData=res.result.recordsets[0];

                  if(this.workerData[0].FirstName==null){
                    this.workerData[0].FirstName='';
                  }
                  
                  if(this.workerData[0].LastName==null){
                    this.workerData[0].LastName='';
                  }
                  
                  if(this.workerData[0].BaseLocation==null){
                    this.workerData[0].BaseLocation='';
                  }
                  
                  
                  if(this.workerData[0].Rate==null){
                    this.workerData[0].Rate='';
                  }

                }
              );

             


  }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    if(this.auth.getUserType()=='worker'){
      this.isWorker=true;
    }
    else{
      this.isWorker=false;
    }
    if (this.isEditing) {
      this.form.enable();
    }
    else {
      this.form.disable();
    }

  }

  setUpdating() {
    this.isEditing = true;
    this.form.enable();
  }

  cancelUpdate() {
    this.isEditing = false;
    this.form.disable();
  }

  updateProfile(){
    this.wdata.updateWorkerDetails(parseInt(localStorage.getItem('UserId')), this.FirstName, this.LastName, this.BaseLocation, this.ContactNumber).subscribe(
      res => {
        this.isEditing = false;
        this.form.disable();
      }
    )
  }
  

}