import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
  uid: any
  udata: any
  cpsw: any 
  upsw: any
  constructor(private us: UserService, private rout: Router, private fb: FormBuilder) {

  }
  pswCheck: boolean = false


  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.uid = localStorage.getItem('currentId')
      this.us.getUser(this.uid).subscribe((result: any) => {

        this.udata = result.message
        // console.log(this.uid);
        // console.log(this.udata);
        // console.log(this.upsw);


      })


    }
  }


  gobacK() {
    this.rout.navigateByUrl("")
  }


  editProfile() {
    //     console.log(this.uid);
    //     console.log(this.udata);
    // console.log(this.upsw);
    this.upsw = this.udata.password

    if (this.upsw == this.cpsw) {
      this.us.updateUser(this.uid, this.udata).subscribe((result: any) => {
        alert('updated successfully')
      })
      this.pswCheck = false
      console.log(this.udata);

    }
    else {
      this.pswCheck = true
    }

  }

}

