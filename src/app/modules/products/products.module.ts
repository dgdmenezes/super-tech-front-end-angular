import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductsHomeComponent, ProductCardComponent],
  imports: [CommonModule, MatSlideToggleModule, MatIconModule],
  exports: [],
})
export class ProductsModule {}
