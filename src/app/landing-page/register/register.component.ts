import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private us: UserService, private rout: Router,private fb:FormBuilder) {

  }
  ngOnInit(): void {

  }
  pswCheck: boolean = false
  touch:boolean =false
  // reactive model 
  registerForm=this.fb.group({
    uname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    upsw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    cpsw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })

  signup() {
    var path=this.registerForm.value
    var uname = path.uname
    var email = path.email
    var mobile = path.mobile
    var upsw = path.upsw
    var cpsw = path.cpsw

    if(this.registerForm.valid){
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
        this.pswCheck=true
        this.touch=true
      }
  
    }
    else{
      this.touch=true

    }
  }
  gobacK(){
    this.rout.navigateByUrl("")
  }
}
