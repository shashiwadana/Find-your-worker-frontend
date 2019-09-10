import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{AuthService} from '../../services/auth.service';
import{Job} from '../../models/worker-search.model';
import{JobService} from '../../services/job.service';
import{ClientRequestModel} from '../../models/ClientRequest.model';
import{WorkerRequestsService} from '../../services/worker-requests.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  RequestList: ClientRequestModel[] = [];
  StartTime: string;
  ExpectedEndTime: string;
  OrderDate: string;
  OrderLocation: string;
  SkillId: number;
  SkillList: Job[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private userService:AuthService,
    private dataService:JobService,
    private requestService:WorkerRequestsService,
    private toastr:ToastrService,
  ) { }

  ngOnInit() {
    
    this.dataService.getJobs().subscribe(
      res => {
        this.SkillList = res.recordset;
        this.requestService.getRequests(localStorage.getItem('UserId')).subscribe(
          res => {
            this.RequestList = res.result[0];
            console.log(this.RequestList);
            for (const request of this.RequestList) {
              for (const skill of this.SkillList) {
                if (request.SkillId === skill.SkillId) {
                  request.SkillTitle = skill.SkillTitle;
                }
              }
            }
          },
        );
      }
    );
  }

  acceptRequest(requestId){
    this.requestService.acceptRequest(requestId, localStorage.getItem('UserId')).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Request Accepted');
       // this.router.navigate(['/worker-dashboard']);
       window.location.reload();
      }
    )
  }

}
