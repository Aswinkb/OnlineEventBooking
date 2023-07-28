import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent {
  eid: any
  event: any
  uid: any
  constructor(private ar: ActivatedRoute, private us: UserService, private rout: Router) {

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.eid = data.id
    })
    this.us.event(this.eid).subscribe((result: any) => {
      this.event = result.message[0]
      console.log(this.event);
    })
    this.uid = localStorage.getItem('currentId')
    console.log(this.uid);
    

  }
  back() {
    this.rout.navigateByUrl('events')
  }
  booknow() {
    if (localStorage.getItem('currentId')) {
      this.us.booknow(this.uid,this.event).subscribe((result:any)=>{
        alert(result.message)
      },result=>{
        alert(result.error.message)
      })
    }
    else {
      alert('Please login')
      this.rout.navigateByUrl('')
    }
  }

}


