import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb: FormBuilder, private as: AdminService,private rout:Router) {

  }

  scheduleForm = this.fb.group({
    eid: [Number, [Validators.required]],
    cid: [Number, [Validators.required]],
    ename: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    price: [Number, [Validators.required]],
    is_available: ['', [Validators.required]],
    eimage: ['', [Validators.required]],
    venue: ['', [Validators.required]],
    organizer: ['', [Validators.required]],
    date: [Date, [Validators.required]],
    time: ['', [Validators.required]]
  })
  addevent() {
    var path = this.scheduleForm.value
    var eid = path.eid
    var cid = path.cid
    var ename = path.ename
    var desc = path.desc
    var price = path.price
    var is_available = path.is_available
    var eimage = path.eimage
    var venue = path.venue
    var organizer = path.organizer
    var date = path.date
    var time = path.time
    
    if (this.scheduleForm.valid) {
      this.as.addevent(eid,
        cid,
        ename,
        desc,
        price,
        is_available,
        eimage,
        venue,
        organizer,
        date,
        time,
      ).subscribe((result: any) => {
        alert(result.message)
      },
        result => {
          alert(result.error.message)
        })
    }
    else{
      alert('Please fill the form')
    }

  }
  reset():void {
    this.scheduleForm.reset()
  }
  logout() {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      this.rout.navigateByUrl('admin')
      }
  }
  
  isLocalStorageEmpty(): boolean {
    return localStorage.getItem('currentEmail') === null;
  }
  
}
