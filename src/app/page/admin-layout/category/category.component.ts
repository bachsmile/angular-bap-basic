import { Category } from './../../../class/category';
import { CategoryService } from './../../../service/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  listCategory=[];
  itemCategory:Category=new Category();
  constructor(private categoryservice:CategoryService) { }


  ngOnInit() {
    this.categoryservice.getList().subscribe(res=>{
      this.listCategory=res.data;
      console.log(this.listCategory)
    })
    document.onmousemove=e => {

       var x = e.clientX;
       var y = e.clientY;


       var windowWidth = window.innerWidth;
       var windowHeight = window.innerHeight;
       var mouseXpercentage = Math.round(e.pageX / windowWidth * 100);
       var mouseYpercentage = Math.round(e.pageY / windowHeight * 100);
       document.getElementById('radial-gradient1').setAttribute("style",`background: radial-gradient(at ${mouseXpercentage}%  ${mouseYpercentage}%, red ,#1793b5)`);
    }
    document.getElementById('load1').style.display='block';
    document.getElementById('admin1').style.display='none';
    setTimeout(function(){
      document.getElementById('load1').style.display='none';
      document.getElementById('admin1').style.display='block';
    }, 1000);
  }
  clearCoor() {
    document.getElementById("demo1").innerHTML = "";

  }
  addCategory(){
    this.categoryservice.create(JSON.stringify(this.itemCategory)).subscribe(res=>{
      console.log(res);
      document.getElementById('modelId').style.display='none';
      if(res.message=='Success'){
        alert('add success  ');
        // document.getElementById('modelId').style.display='none';
        // let an = document.getElementsByClassName('modal-backdrop');
        //   an[0].setAttribute('class','');
      }
    })
  }

}
