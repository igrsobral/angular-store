import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: Record<number, number> = {
  1: 400,
  3: 335,
  4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor (private cartService: CartService) {}

  ngOnInit(): void {}

  onColumnsCountChange(colsNum: number){
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onShowCategory(newCategory: string): void{
    this.category = newCategory
  }

  onAddToCart({ id, image, title, price }: Product): void {
    this.cartService.addToCart({ 
      product: image,
      name: title,
      price,
      quantity: 1,
      id: id
    });
  }
}
