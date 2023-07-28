import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aid:any
  apsw:any
  constructor(private as:AdminService,private fb:FormBuilder,private rout:Router){

  }
  ngOnInit(): void {

  }
  adminForm=this.fb.group({
    aid:[''],
    apsw:['']
  })
  goBack(){
    this.rout.navigateByUrl('')
  }
  alogin(){
    var aid = this.adminForm.value.aid
    var apsw = this.adminForm.value.apsw
    this.as.login(aid,apsw).subscribe((result:any)=>{
      alert(result.message)
      localStorage.removeItem('currentUser')
      localStorage.removeItem('currentId')
      localStorage.removeItem('currentEmail')
  
      console.log(result);
      
      this.rout.navigateByUrl('adminHome')
      
    },
    result=>{
      alert(result.error.message)
    }
    )
  }

}
