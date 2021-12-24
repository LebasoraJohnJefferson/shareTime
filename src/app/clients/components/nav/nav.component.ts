import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() isSearch:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  searchBtn(){
    this.isSearch = !this.isSearch
  }

}
