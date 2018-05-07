import { CategoryService } from './../../../service/category/category.service';
import { ProductService } from './../../../service/product/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy {
isAlive: boolean=true;
productList
categoryList

  constructor(
    private productService:ProductService,
    private categoryService:CategoryService
  ) { 

    this.productService.getallProducts().takeWhile(()=>this.isAlive).
    subscribe(response=>{
      this.productList=response.json();
      // console.log(this.productList);
    });
    this.categoryService.GetCategory().takeWhile(()=>this.isAlive).
    subscribe(response=>{
      this.categoryList=response.json();
    });
  //  console.log(this.categoryList$);
  }

  ngOnDestroy()
  {
    this.isAlive= false;
  }
  ngOnInit() {
  }

  GetCategory()
  {
    
  }

}
