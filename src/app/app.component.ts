import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from './service/window.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from './service/upload.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bap';
  error: string;

  form: FormGroup;
  uploadResponse = { status: '', message: '', filePath: '' };
  name;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private formBuilder: FormBuilder,
    private upload: UploadService,
    private http: HttpClient
  ){}
  ngOnInit(){
    this.form = this.formBuilder.group({
      avatar: [""]
    });
  }
  myFunction(){
    console.log('x');
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 100;
    if(offset<=100){
      if(document.getElementById('header')!=null){
        document.getElementById('header').setAttribute('class','fulls w-100');
      }
    }
    else{
      if(document.getElementById('header')!=null){
        document.getElementById('header').setAttribute('class','full w-100');
      }
    }
  }

}
