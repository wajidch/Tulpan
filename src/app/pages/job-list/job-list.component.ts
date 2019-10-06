import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  joblist: any;
  imgUrl=environment.imageUrl;

  constructor(private apiservice:apiService) { }

  ngOnInit() {
    this.getJob();
  }


  getJob(){

    this.apiservice.get("job/jobList").subscribe((res:any)=>{

      this.joblist=res.body.response;
    })
  }
}
