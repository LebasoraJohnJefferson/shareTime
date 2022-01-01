import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router,private toastr:ToastrService){

  }

  canActivate():boolean{
    if(this.authService.isLogin()){
      return true
    }else{
      this.router.navigate(['./settings'])
    this.toastr.warning('Forbidden','Pls Login..',{positionClass:'toast-bottom-right'})
      return false
    }
  }
  
}
