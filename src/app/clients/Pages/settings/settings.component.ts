import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() isClick:boolean = true
  @Input() isSubmit_login:boolean = false
  @Input() isSubmit_register:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(authName:string){
    if(authName=='login') this.isSubmit_login = !this.isSubmit_login
    else if(authName=='register') this.isSubmit_register = !this.isSubmit_register
  }
  authNav(){
    this.isClick = !this.isClick
  }
}
