import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Auth} from '../schemas/Auth'
import { Backend } from './backend';
import { catchError, Observable,of } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    
  })
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private BackEnd = Backend
  constructor(private http:HttpClient ) { }

  getAuth(auth:any):Observable<any>{
    const url = `${Backend}/users`
    return this.http.post<Auth>(url,auth,httpOption);
  }
}
