import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname: any
  email: any
  mobile: any
  upsw: any
  cpsw: any

  constructor(private us: UserService, private rout: Router) {

  }
  ngOnInit(): void {

  }

  signup() {
    var uname = this.uname
    var email = this.email
    var mobile = this.mobile
    var upsw = this.upsw
    var cpsw = this.cpsw
    if (upsw == cpsw) {
      this.us.register(uname, email, mobile, upsw).subscribe((result: any) => {
        alert(result.message)
        this.rout.navigateByUrl('')
        
      },
        result => {
          alert(result.error.message)
        })
    }
    else {
      alert('incorrect password')
    }
  }
}
