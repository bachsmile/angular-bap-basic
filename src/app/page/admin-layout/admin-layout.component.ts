import { Component, OnInit } from '@angular/core';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  count;
  constructor() { }

  ngOnInit() {
  }
  displayCounter(count) {
    //console.log(count);
    this.count=count;
}
clearCoor() {
  document.getElementById("demo").innerHTML = "";
  //console.log('ngoài');
}
}
