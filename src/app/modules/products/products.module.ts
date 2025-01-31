import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductsHomeComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [],
})
export class ProductsModule {}
