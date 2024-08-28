import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number): Observable<Product> {
    console.log("sid:::::::::"+id);
    const datacollection= this.http.get<Product>(`${this.apiUrl}/${id}`);
    console.log("collection data::::::::::::::::::::"+JSON.stringify(datacollection));
    return datacollection
  }
  //   getProduct(id:number):Observable<Product
  // }
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
