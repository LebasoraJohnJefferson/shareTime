import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Backend } from './backend';





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
    
  }
  
  getUser(access_token:string):Observable<any>{
    let url = `${Backend}/users`
    let token
    if(access_token){
      token = access_token;
    }else{
      token = 'null';
    }
    return this.http.get(url,{  
      'responseType':'json',
      headers:{Authorization: `Bearer ${token}`},
    })
  }



}
