import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  param: any;
  jobdetail: any;

  constructor(private route: ActivatedRoute,private apiservice:apiService) { }

  ngOnInit() {
    this.param = this.route.snapshot.queryParamMap.get('job_id');
    console.log("job",this.param);
    this.getJobdetail(this.param)
  }

  getJobdetail(jobid){

    this.apiservice.get(`job/jobdetail?job_id=${jobid}`).subscribe((res:any)=>{

      this.jobdetail=res.body.response;
      console.log("job detail",this.jobdetail)
    })

  }
}
