import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: any
  upsw: any
  @ViewChild('loginModal') loginModal!: ElementRef; // Reference to the modal element

  constructor(private us: UserService, private fb: FormBuilder) {

  }
  // reactive form
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    upsw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  login() {
    var path=this.loginForm.value
    var email = path.email
    var upsw = path.upsw
    this.us.login(email, upsw).subscribe((result: any) => {
      localStorage.setItem('currentUser',result.currentUser)
      localStorage.setItem('currentEmail',result.currentEmail)
      localStorage.setItem('currentId',result.currentId)
      console.log(result);
      
      alert(result.message)
      
    },
      result => {
        alert(result.error.message)
      })
  }

}
