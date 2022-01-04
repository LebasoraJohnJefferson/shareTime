import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() isClick:boolean = true
  @Input() isSubmit_login:boolean = false
  @Input() isSubmit_register:boolean = false
  randomProfile = [
    './../../../../assets/img/ch1.png',
    './../../../../assets/img/ch2.jpg',
    './../../../../assets/img/ch3.jpg',
    './../../../../assets/img/ch4.jpg'
  ]
  authEmail:string = ''
  authProfile:string = ''
  isAuthenticated = false
  result:string =''
  formLogin = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  formRegister = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private authService:AuthService,private userService:UsersService,private toastr: ToastrService) {
    this.check_token()
  }
  
  ngOnInit(): void {
  }
  //login btn fired
  onSubmit(authName:string){
    if(authName=='login') {
      if(this.formLogin.valid){
        this.isSubmit_login = !this.isSubmit_login
        const new_object={'username':'','password':''}
        new_object['username'] = this.formLogin.value['email']
        new_object['password'] = this.formLogin.value['password']
        this.userService.login(new_object).subscribe((response)=>{
          sessionStorage.setItem('access_token',response.access_token)
          this.toastr.success('Welcome Back','Successfully Login  ',{positionClass:'toast-bottom-right'})
          this.isSubmit_login = !this.isSubmit_login
          this.check_token()
        },(error)=>{
          this.result = error.status == 403 ? 'Account Does`nt Exist' : 'Server Down';
          this.toastr.warning('',this.result,{positionClass:'toast-bottom-right'})
          this.isSubmit_login = !this.isSubmit_login
        })
      }else{
        this.toastr.error('Invalid Input', 'Error',{positionClass:'toast-bottom-right'});
      }
      //register btn fired
    }else if(authName=='register') {
      if(this.formRegister.valid){
        this.isSubmit_register = !this.isSubmit_register
        this.userService.createUser(this.formRegister.value).subscribe(()=>{
            this.isSubmit_register = !this.isSubmit_register
            this.toastr.success("successfully register",'Congratulation',{positionClass:'toast-bottom-right'})
          },error=>{
            this.result = error.status == 403 ? 'account already exist' : 'Server Error';
            this.isSubmit_register = !this.isSubmit_register
            this.toastr.warning('', this.result,{positionClass:'toast-bottom-right'});
        })
      }else{
        this.toastr.error('Invalid Input', 'Error',{positionClass:'toast-bottom-right'});
      }
    }
  }

  authNav(){
    this.isClick = !this.isClick
  }

  check_token(){
    this.isAuthenticated = sessionStorage.getItem('access_token') ? true : false
    let access_token = sessionStorage.getItem('access_token')
    if(access_token){
      this.userService.getUser(access_token).subscribe(response=>{
        this.authEmail = response.email
        this.authProfile = response.profile ? response.profile : this.randomProfile[Math.floor(Math.random()*4)]  
      },error=>{
        this.toastr.warning('','Invalid Credentials',{positionClass:'toast-bottom-right'})
      })
    }
  }
}
