import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';   
import { NgxSpinnerService } from 'ngx-spinner';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    
 
  
  }
  toggle(){
    $('#btnTrigger').click();
  }
 

}
