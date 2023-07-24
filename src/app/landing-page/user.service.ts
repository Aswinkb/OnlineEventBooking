import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  // api to register
  register(uname: any, email: any, mobno: any, upsw: any) {
    const body = {
      uname,
      email,
      mobno,
      upsw
    }
    return this.http.post('http://localhost:3000/register',body)
  }
  // api to login
  login(email:any,upsw:any){
    const body={
      email,
      upsw
    }
    return this.http.post('http://localhost:3000/login',body)
  }
  // api to get user data
  getUser(currentId:any){
    return this.http.get('http://localhost:3000/getuser/'+currentId)
 
  }
  // api to update
  updateUser(uid:any,udata:any){
    return this.http.put('http://localhost:3000/updateuser/'+uid,udata)
  }
}
