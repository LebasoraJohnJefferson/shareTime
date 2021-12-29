import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Backend } from './backend';
import { Observable } from 'rxjs'
import { Auth, Login } from '../schemas/Auth';


const httpOption = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}

const httpMultipart = {
  headers: new HttpHeaders({
    'Content-type':'application/x-www-form-urlencoded',
    'boundary':'l3iPy71otz',
    'Authorization':'Authorized'
  })
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http:HttpClient ) { }

  //createUser
  createUser(auth:any):Observable<any>{
    const url = `${Backend}/users`
    return this.http.post<Auth>(url,auth,httpOption);
  }
  //login
  login(auth:Login):Observable<any>{
    const url = `${Backend}/login`
    const body = `username=${auth.username}&password=${auth.password}`
    return this.http.post<any>(url,body,httpMultipart);
  }

}
