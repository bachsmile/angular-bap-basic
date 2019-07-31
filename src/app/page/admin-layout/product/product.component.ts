import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product=[];
  prod=[];
  constructor(private productservice:ProductService) { }

  ngOnInit() {
    document.onmousemove=e => {
      var x = e.clientX;
      var y = e.clientY;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
      var mouseYpercentage = Math.round(e.pageY / windowHeight * 100);
      // document.getElementById('radial-gradient3').setAttribute("style",`background: radial-gradient(at ${mouseXpercentage}%  ${mouseYpercentage}%, red ,#1793b5)`);
   }
   document.getElementById('load3').style.display='block';
   document.getElementById('admin3').style.display='none';
   setTimeout(function(){
     document.getElementById('load3').style.display='none';
     document.getElementById('admin3').style.display='block';
   }, 1000);
    this.productservice.getProd().subscribe(data=>{
      this.product=data.data;
      console.log(this.product);
    });

    this.productservice.watcher.subscribe(data=>{
      this.productservice.getProd().subscribe(data=>{
        this.product=data.data;
      console.log(this.product);
      })
    })
  }
  deleteProd(id){
    console.log(JSON.stringify(id));
    this.productservice.delete(JSON.stringify(id)).subscribe(res=>{
      console.log(res);
      this.productservice.update();
    });
  }
  sentIdUpdate(i){
    this.prod[0]=this.product[i];
  }
  addItem(){

  }
  updateDB(){
    this.productservice.update();
  }
  show(value){
    this.product=[];
    console.log(value);
    this.product=value;
  }
}
