import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() status:boolean=true;
  picture:number = 0;
  profile:string ='';
  random_picture = [
    '../../../assets/img/ch1.png',
    '../../../assets/img/ch2.jpg',
    '../../../assets/img/ch3.jpg',
    '../../../assets/img/ch4.jpg'
  ]
  name:string = 'lebs';
  constructor() { }

  ngOnInit(): void {
    this.get_random_profile()
    this.name = this.name.toUpperCase()
  }

  get_random_profile(){
    if (this.profile == ''){
      this.picture = Math.floor(Math.random()*this.random_picture.length)
      this.profile = this.random_picture[this.picture]
    }
  }

}
