
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-form-ad',
  templateUrl: './form-ad.component.html',
  styleUrls: ['./form-ad.component.scss']
})
export class FormAdComponent implements OnInit {

  @Input() Link1: string;
  @Input() Link2: string;
  @Input() Link3: string;
  @Input() img: string;
  @Input() title: string;
  @Input() bt1:string;
  @Input() bt2:string;
  @Input() lable:string;
  @Input() checkBt:boolean;
  bt1p=this.bt1;
  constructor() { }
  ngOnInit() {
  }

}
