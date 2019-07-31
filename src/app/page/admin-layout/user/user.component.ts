import { LoginService } from './../../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = [];
  userUd=[];
  id;
  constructor(private loginservice: LoginService) { }

  ngOnInit() {
    this.loginservice.update();
    document.onmousemove=e => {
       var x = e.clientX;
       var y = e.clientY;
       var windowWidth = window.innerWidth;
       var windowHeight = window.innerHeight;
       var mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
       var mouseYpercentage = Math.round(e.pageY / windowHeight * 100);
       document.getElementById('radial-gradient2').setAttribute("style",`background: radial-gradient(at ${mouseXpercentage}%  ${mouseYpercentage}%, red ,#1793b5)`);
    }
    document.getElementById('load2').style.display='block';
    document.getElementById('admin2').style.display='none';
    setTimeout(function(){
      document.getElementById('load2').style.display='none';
      document.getElementById('admin2').style.display='block';
    }, 1000);
    this.loginservice.getListUser().subscribe(data=>{
      this.user=data.data;
      console.log(this.user);
    })
    this.loginservice.watcher.subscribe(data=>{
      this.loginservice.getListUser().subscribe(data=>{
        this.user=data.data;
        console.log(this.user);
      })
    })

  }
  clearCoor() {
    document.getElementById("demo2").innerHTML = "";
    console.log('ngoài');
  }
  deleteUser(id){
    console.log(JSON.stringify(id));
    this.loginservice.delete(JSON.stringify(id)).subscribe(res=>{
      console.log(res);
      this.loginservice.update();
    });
  }
  updateDB(){
    this.loginservice.update();
  }
  addItem(){

  }
  sentIdUpdate(id){
    this.userUd[0]=this.user[id];
    console.log(this.userUd);
  }
}
