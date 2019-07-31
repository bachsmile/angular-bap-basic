import { CategoryService } from './../../service/category.service';
import { ProductService } from "./../../service/product.service";
import { Product } from "./../../class/product";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  item: Product = new Product();
  shoesS = [];
  listCategory=[];
  constructor(private productservice: ProductService,private categoryservice:CategoryService) {}
  @Output() sentDT = new EventEmitter();
  ngOnInit() {
    this.categoryservice.getList().subscribe(res=>{
      this.listCategory=res.data;
    })
  }
  a(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  shoes(data) {
    switch (data) {
      case 'shoes':
          this.shoesS=[];
          this.productservice.getProd().subscribe(res => {
            res.data.forEach(element => {
              if (element.title === "shoes") {
                this.shoesS.push(element);
              }
            });
            console.log(this.shoesS);
            this.sentDT.emit(this.shoesS);
          });
        break;
      case 'Apparel':
        this.shoesS=[];
          this.productservice.getProd().subscribe(res => {
            res.data.forEach(element => {
              if (element.title === "Apparel") {
                this.shoesS.push(element);
              }
            });
            console.log(this.shoesS);
            this.sentDT.emit(this.shoesS);
          });
        break;
      default:
      this.shoesS=[];
      this.productservice.getProd().subscribe(res => {
        res.data.forEach(element => {

            this.shoesS.push(element);

        });
        console.log(this.shoesS);
        this.sentDT.emit(this.shoesS);
      });
        break;
    }

  }
}
