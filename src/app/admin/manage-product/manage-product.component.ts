import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
product$

  constructor(
    private route:Router,
    private activatedRouter:ActivatedRoute,
    private productService:ProductService
  ) { 
    
    let id= this.activatedRouter.snapshot.paramMap.get("id"); 

    if(id)
    {
      this.productService.getProductById(id).subscribe(p=> this.product$=p);
    }

  }

  ngOnInit() {
  }

  Save(formData)
  {

console.log(JSON.stringify(formData))
      //Calls the Service to store the result

     this.route.navigate(['/product']);
  }

}
