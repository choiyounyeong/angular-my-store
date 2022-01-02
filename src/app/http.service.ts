import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<[]> {
    return this.http.get<[]>('http://localhost:3000/products');
  }
}
