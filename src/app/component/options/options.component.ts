import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter ;
  constructor() { }

  ngOnInit() {
  }

  valueChanged(data) { // You can give any function name
    this.counter = data;
    this.valueChange.emit(this.counter);
  }
}
