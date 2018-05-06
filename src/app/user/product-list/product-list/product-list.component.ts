import { ProductService } from './../../../service/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
isAlive: boolean=true;
productList

  constructor(private productService:ProductService) { 

    this.productService.getallProducts().takeWhile(()=>this.isAlive).
    subscribe(response=>{
      this.productList=response.json();
      // console.log(this.productList);
    });   
  }

  ngOnInit() {
  }

}
