import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.onmousemove=e => {

       var x = e.clientX;
       var y = e.clientY;

       var windowWidth = window.innerWidth;
       var windowHeight = window.innerHeight;
       var mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
       var mouseYpercentage = Math.round(e.pageY / windowHeight * 100);
       document.getElementById('radial-gradient').setAttribute("style",`background: radial-gradient(at ${mouseXpercentage}%  ${mouseYpercentage}%, red ,#1793b5)`);
    }
    document.getElementById('load').style.display='block';
    document.getElementById('admin').style.display='none';
    setTimeout(function(){
      document.getElementById('load').style.display='none';
      document.getElementById('admin').style.display='block';
    }, 1000);
  }
  clearCoor() {
    document.getElementById("demo").innerHTML = "";

  }
}

