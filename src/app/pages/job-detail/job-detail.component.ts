import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  param: any;
  jobdetail: any;

  constructor(private route: ActivatedRoute,
    private apiservice:apiService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.param = this.route.snapshot.queryParamMap.get('job_id');
    console.log("job",this.param);
    this.getJobdetail(this.param)
  }

  getJobdetail(jobid){

    this.spinner.show();
    this.apiservice.get(`job/jobdetail?job_id=${jobid}`).subscribe((res:any)=>{

      this.jobdetail=res.body.response;
      
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 3000);  
      console.log("job detail",this.jobdetail)
    })

  }
}
