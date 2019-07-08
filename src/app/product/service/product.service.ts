import { Injectable, Inject } from '@angular/core';
import { Product } from '../product'; 
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'; 
import { map,catchError,tap } from "rxjs/operators"; //Adım 4

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http:Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl:string):Observable<Product[]>{
    if (seoUrl) {
      return this.http.get(this.apiUrl + "/products/" + seoUrl)
      .pipe(map(Response => Response.json()))
    } else {
      return this.http.get(this.apiUrl + "/products/")
      .pipe(map(Response => Response.json()))
    }
  }
}
