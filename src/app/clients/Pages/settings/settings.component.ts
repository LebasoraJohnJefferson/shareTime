import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @Input() isSubmit:boolean = true
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.isSubmit =!this.isSubmit
  }
}
