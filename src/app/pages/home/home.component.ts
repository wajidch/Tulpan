import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHomeAndConactMenu: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
    
  
  }


  home(){
    $("#home").addClass('active');
    $("#about").removeClass('active');
    $("#team").removeClass('active');
    $("#job").removeClass('active');
    $("#contact").removeClass('active');
  }
  about(){
    $("#home").removeClass('active');
    $("#about").addClass('active');
    $("#team").removeClass('active');
    $("#contact").removeClass('active');
    $("#job").removeClass('active');
  }
  team(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#team").addClass('active');
    $("#contact").removeClass('active');
    $("#job").removeClass('active');
  }
 
  contact(el: HTMLElement){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#team").removeClass('active');
    $("#job").removeClass('active');
    $("#contact").addClass('active');
     el.scrollIntoView();

  }
  job(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#team").removeClass('active');
    $("#contact").removeClass('active');

    $("#job").addClass('active');
  }
}
