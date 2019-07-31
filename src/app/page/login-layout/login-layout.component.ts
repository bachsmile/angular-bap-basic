import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  vote: number = 0;

  constructor() { }

  ngOnInit() {
  }
  voteCount(value) {
    this.vote = value;
  }
}
