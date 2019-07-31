import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  info:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  focus(){
    this.info=!this.info;
  }
}
