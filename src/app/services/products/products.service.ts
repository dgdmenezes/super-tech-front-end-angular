import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllProductsResponse } from 'src/app/models/interfaces/response/GetAllProductsResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Array<GetAllProductsResponse>> {
    return this.http.get<Array<GetAllProductsResponse>>(
      `${this.API_URL}/products`
    );
  }
}
