import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() isClick:boolean = true
  @Input() isSubmit_login:boolean = false
  @Input() isSubmit_register:boolean = false
  result:string =''
  formLogin = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  formRegister = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private authService:AuthService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(authName:string){
    if(authName=='login') {
      if(this.formLogin.valid){
        const new_object={'username':'','password':''}
        new_object['username'] = this.formLogin.value['email']
        new_object['password'] = this.formLogin.value['password']
        this.authService.login(new_object).subscribe((response)=>{
          sessionStorage.setItem('access_token',response.access_token)
          this.toastr.success('Welcome Back','Successfully Login  ',{positionClass:'toast-bottom-right'})
        },(error)=>{
          if (error.status == 403){
            this.toastr.warning('','Account Does`nt Exist',{positionClass:'toast-bottom-right'})
          }
        })
      }else{
        this.toastr.error('Invalid Input', 'Error',{positionClass:'toast-bottom-right'});
      }
    }else if(authName=='register') {
      if(this.formRegister.valid){
        this.isSubmit_register = !this.isSubmit_register
        this.authService.createUser(this.formRegister.value).subscribe(()=>{
            this.isSubmit_register = !this.isSubmit_register
            this.toastr.success("successfully register",'Congratulation',{positionClass:'toast-bottom-right'})
          },error=>{
            if(error.status == 403 ) {
              this.result = 'account already exist'
            }else{
            this.result = 'Server Error'
            }
            this.isSubmit_register = !this.isSubmit_register
            this.toastr.warning('Email Already Exist', 'Error',{positionClass:'toast-bottom-right'});
        })
      }else{
        this.toastr.error('Invalid Input', 'Error',{positionClass:'toast-bottom-right'});
      }
    }
  }

  authNav(){
    this.isClick = !this.isClick
  }
}
