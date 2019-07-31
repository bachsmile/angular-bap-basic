import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-shop-apparel',
  templateUrl: './shop-apparel.component.html',
  styleUrls: ['./shop-apparel.component.scss']
})
export class ShopApparelComponent implements OnInit {


  items: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProd().subscribe(res=>{
     res.data.forEach(element => {
        if(element.title==='Apparel'){
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
