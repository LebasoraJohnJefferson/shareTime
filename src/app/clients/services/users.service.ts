import { Injectable } from '@angular/core';
import { Backend } from './backend';
import { Observable } from 'rxjs'
import { Auth, Login } from '../schemas/Auth';
import { HttpClient,HttpHeaders } from '@angular/common/http';


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
export class UsersService {

  constructor(private http:HttpClient) {
    
  }
  
  getUser(access_token:string):Observable<any>{
    const url = `${Backend}/users`
    return this.http.get(url,{  
      'responseType':'json',
      headers:{Authorization: `Bearer ${access_token}`},
    })
  }

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

  profile(access_token:string,profile:string):Observable<any>{
    const url = `${Backend}/users/profile`
    return this.http.put<any>(url,{"profile":`${profile}`},{  
      'responseType':'json',
      headers:{Authorization: `Bearer ${access_token}`},
    })
  }


}
