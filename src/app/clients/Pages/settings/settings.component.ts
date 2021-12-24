import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(authName:string){
    if(authName=='login') {
      this.isSubmit_login = !this.isSubmit_login
      alert(this.formLogin)
    }else if(authName=='register') {
      this.isSubmit_register = !this.isSubmit_register
      alert(this.formRegister)
    }
    setTimeout(()=>
        this.isSubmit_register = !this.isSubmit_register
    ,2000)
  }
  authNav(){
    this.isClick = !this.isClick
  }
}
