import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  uname:any
  uid:any
  constructor(private rout: Router){

}
ngOnInit():void{
  if(localStorage.getItem('currentUser')){
    this.uname=localStorage.getItem('currentUser')
    this.uid=localStorage.getItem('currentId')
  }
}
logout() {
  const confirmed = window.confirm('Are you sure you want to log out?');
  if (confirmed) {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentId')
    localStorage.removeItem('currentEmail')
    this.rout.navigateByUrl("")
    }
}

isLocalStorageEmpty(): boolean {
  return localStorage.getItem('currentEmail') === null;
}

}
