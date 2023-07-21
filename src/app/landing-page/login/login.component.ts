import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any
  upsw: any
  constructor(private us: UserService) {

  }
  login() {
    var email = this.email
    var upsw = this.upsw
    this.us.login(email, upsw).subscribe((result: any) => {
      alert(result.message)
    },
      result => {
        alert(result.error.message)
      })
  }

}
