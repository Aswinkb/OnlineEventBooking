import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  eventarray :any =[]
  constructor(private rout:Router,private us:UserService){

  }
ngOnInit():void{
  this.us.viewevents().subscribe((result:any)=>{
    this.eventarray = result.message
    // console.log(this.eventarray);
  })
}
}
