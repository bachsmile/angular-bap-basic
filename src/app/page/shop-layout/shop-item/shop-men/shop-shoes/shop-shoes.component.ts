import { Product } from './../../../../../class/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-shop-shoes',
  templateUrl: './shop-shoes.component.html',
  styleUrls: ['./shop-shoes.component.scss']
})
export class ShopShoesComponent implements OnInit {
  items: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProd().subscribe(res=>{
      res.data.forEach(element => {
        if(element.title==='shoes'){
          this.items.push(element);
        }
      });
    })
  }
  in(i,img2){
    console.log(i);
    document.getElementById(i).setAttribute('src',img2)
  }
  out(i,img1){
    document.getElementById(i).setAttribute('src',img1)

  }
}
