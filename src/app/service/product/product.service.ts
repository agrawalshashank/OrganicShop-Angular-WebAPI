import { GenericError } from './../../common/error/GenericError';
import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import {_throw} from 'rxjs/observable/throw';
import { NotFound404 } from '../../common/error/404NotFound';


@Injectable()
export class ProductService {
 url:string="";
  constructor(private product:Http) { }


  getallProducts()
  {
     return this.product.get(this.url).
      catch((error:Response)=>
        {
           if(error.status == 404)
           {
             return _throw(new NotFound404())
           }
           else
           {
             return _throw(new GenericError());
           }
        });
  }

  getProductById(id:string)
  {
     return this.product.get(this.url +'product/'+ id).
      catch((error:Response)=>
        {
          if(error.status==404)
          {
            return _throw(new NotFound404());
          }
          else
          {
            return _throw(new GenericError());
          }
        }
    )
  }

}
