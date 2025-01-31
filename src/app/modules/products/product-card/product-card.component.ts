import { GetAllProductsResponse } from './../../../models/interfaces/response/GetAllProductsResponse';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  //imports: [],
})
export class ProductCardComponent {
  @Input() cardData: Array<GetAllProductsResponse> = [];
}
