import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import { Location } from '../../models/base-loaction.model';
import{Observable} from 'rxjs';
import{AuthService} from '../../services/auth.service';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { identifierModuleUrl } from '@angular/compiler';
import{ClientDataService} from '../../services/client-data.service';
import{ClientProfileModel} from '../../models/clientProfile.model';
import{JobService} from '../../services/job.service'
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  isClient;
  isEditing: boolean =false;
  form:FormGroup;
  clientData:ClientProfileModel;


  Email:string;
  FirstName: string;
  LastName: string;
  ContactNumber:  string;
  BaseLocation: string;
  BLocations: string[];
  ImgUrl: string;
  private sub: any;
  id: number;
  
  constructor(
    private cdata:ClientDataService,
              private auth:AuthService,
              private route:ActivatedRoute,
              private router:Router,
              private toaster:ToastrService,
              private fb:FormBuilder,
              private loc:JobService,
  ) {
    this.form=this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      contactNo:[''],
      location:['']
     
    });
    this.cdata.getClientDetails(localStorage.getItem('UserId')).subscribe(
      res=>{
        this.clientData=res.result.recordsets[0];

        if(this.clientData[0].FirstName==null){
          this.clientData[0].FirstName='';
        }
        
        if(this.clientData[0].LastName==null){
          this.clientData[0].LastName='';
        }
        
        if(this.clientData[0].BaseLocation==null){
          this.clientData[0].BaseLocation='';
        }
        
        

      }
    );



   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    if(this.auth.getUserType()=='Client'){
      this.isClient=true;
    }
    else{
      this.isClient=false;
    }
    if (this.isEditing) {
      this.form.enable();
    }
    else {
      this.form.disable();
    }
    this.loc.getAllLocations().subscribe(
      res=>{
        this.BLocations=res.recordset;
      }
      
    );

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
    this.cdata.updateClientDetails(parseInt(localStorage.getItem('UserId')), this.FirstName, this.LastName, this.BaseLocation, this.ContactNumber).subscribe(
      res => {
        this.isEditing = false;
        this.form.disable();
      }
    )
  }

}
