import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: string = '';
  check=false;
  constructor(private loginservice: LoginService) { }

  ngOnInit() {
    this.user=window.sessionStorage.getItem('user');
    this.check= window.sessionStorage.getItem('user')? true: false;
    console.log(this.user);
    this.loginservice.update();
    this.loginservice.watcher.subscribe(data=>{
      this.user=window.sessionStorage.getItem('user');
    this.check= window.sessionStorage.getItem('user')? true: false;
    })
  }
  openNav(){
    document.getElementById("mySidebar").style.width = "250px";

 }
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
   // document.getElementById("main").style.marginLeft= "0";
 }
 logout(){
   console.log('a');
    window.sessionStorage.clear();
    window.localStorage.clear();
    this.loginservice.update();
 }
}
