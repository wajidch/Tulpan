import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  joblist: any;
  imgUrl=environment.imageUrl;

  constructor(private apiservice:apiService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getJob();
  }


  getJob(){
    this.spinner.show()
    this.apiservice.get("job/jobList").subscribe((res:any)=>{

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 3000);  
      this.joblist=res.body.response;
    })
  }
}
