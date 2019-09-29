import { Component, OnInit,HostListener, Inject  } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationEnd } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var jquery: any;
declare var $: any;
import { DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
userName=localStorage.getItem('user_name');
token=localStorage.getItem('token');
QuoteForm: FormGroup;
  submitted: boolean;
  showHomeAndConactMenu: boolean=true;
  showAllMenu: boolean=true;

  constructor(private apiservice:apiService,
    private spinner:NgxSpinnerService,
    private router:Router,
    private loadingBar:LoadingBarService,
    ) { }

  ngOnInit() {
   
    this.router.events.subscribe((route)=>{
      if(route instanceof NavigationEnd){
        
        if(route.url==='/joblist' || route.url==='/jobdetail'){
            this.showHomeAndConactMenu=true;
            this.showAllMenu=false
            
            
            
        }
      
        else{
          this.showHomeAndConactMenu=false;
          this.showAllMenu=true

        }
       
      
      }
    })
    // this.QuoteForm= new FormGroup({
    //   Fullname:new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required,
    //   Validators.email]),
    //   phone: new FormControl('', [Validators.required]),
    //   message: new FormControl('', [Validators.required]),

    // })
  
  }
  


}
