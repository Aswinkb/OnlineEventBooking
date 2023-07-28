import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
// api to login
login(aid:any,apsw:any){
  const body ={
    aid,apsw
  }
  return this.http.post('http://localhost:3000/alogin',body)
}
// api to add
addevent(eid: any, cid: any, ename: any, desc: any,price:any,is_available:any,eimage:any,venue:any,organizer:any,date:any,time:any) {
  const body = {
     eid ,
     cid,
     ename,
     desc ,
     price,
     is_available,
     eimage,
     venue ,
     organizer ,
     date,
     time,
  
  }
  return this.http.post('http://localhost:3000/addevent',body)
}

}
