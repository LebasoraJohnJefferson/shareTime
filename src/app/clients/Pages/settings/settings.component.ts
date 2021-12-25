import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeInterval } from 'rxjs';
import {AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() isClick:boolean = true
  @Input() isSubmit_login:boolean = false
  @Input() isSubmit_register:boolean = false
  formLogin = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  formRegister = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(authName:string){
    if(authName=='login') {
      if(this.formLogin.valid){
        this.isSubmit_login = !this.isSubmit_login
        setTimeout(()=>{
          this.isSubmit_login = !this.isSubmit_login
          alert('server not yet live')
        },2000)
      }else{
        alert('invalid form')
      }
    }else if(authName=='register') {
      if(this.formRegister.valid){
        this.isSubmit_register = !this.isSubmit_register
        this.authService.getAuth(this.formRegister.value).subscribe(()=>{
            this.isSubmit_register = !this.isSubmit_register
            alert('successfully register')
        },(err)=>{
          this.isSubmit_register = !this.isSubmit_register
        })
      }else{
        alert('invalid output')
      }
    }
  }

  authNav(){
    this.isClick = !this.isClick
  }
}
