import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from '../category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


constructor(private http:Http, @Inject('apiUrl') private apiUrl) { }

getCategories():Observable<Category[]>{ 
  return this.http.get(this.apiUrl + "/categories")
      .pipe(map(Response => Response.json()))
    }
}
