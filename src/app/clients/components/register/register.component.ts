import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() isSubmit:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmit =!this.isSubmit
  }

}
