import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.scss']
})
export class ShopAllComponent implements OnInit {

  items: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProd().subscribe(res=>{
     this.items=res.data;
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
