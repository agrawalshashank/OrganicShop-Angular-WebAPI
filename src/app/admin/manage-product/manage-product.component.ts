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
ProductId

  constructor(
    private route:Router,
    private activatedRouter:ActivatedRoute,
    private productService:ProductService
  ) { 
    
   this.ProductId= this.activatedRouter.snapshot.queryParamMap.get("id"); 
    if(this.ProductId)
    {
      this.productService.getProductById(this.ProductId).
      subscribe(response=>{        
        this.product$=response.json();        
      });
    }

  }

  ngOnInit() {
  }
 
  Products(formData)
  {
    console.log(this.ProductId);
    if(this.ProductId)
    {
      this.UpdateProduct(formData);
    }
    else
    {
      this.Save(formData);
    }
  }

  Save(formData)
  {
      //Calls the Service to store the result
     this.productService.saveProduct(formData).
     subscribe(response=>{
       console.log("save");
     });
     this.route.navigate(['/product']);
  }

  UpdateProduct(formData)
  {
     this.productService.updateProduct(formData,this.ProductId)
     .subscribe();
  }

}
