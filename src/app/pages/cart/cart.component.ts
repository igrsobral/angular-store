import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent {
  cart: Cart = { 
    items: [
      {
      product: 'https://imgs.search.brave.com/tVEWWrmgAqV-WkZKQ1WZGdReclPSKxg00t-HIcR_LrA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/eHQyX2drdk10LTNa/VVZvOFJGOVNRSGFI/YSZwaWQ9QXBp',
      name: 'Snickers',
      price: 150,
      quantity: 1,
      id: 12345,
     },
      {
      product: 'https://imgs.search.brave.com/tVEWWrmgAqV-WkZKQ1WZGdReclPSKxg00t-HIcR_LrA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/eHQyX2drdk10LTNa/VVZvOFJGOVNRSGFI/YSZwaWQ9QXBp',
      name: 'Snickers',
      price: 150,
      quantity: 3,
      id: 12345,
     },
      {
      product: 'https://imgs.search.brave.com/tVEWWrmgAqV-WkZKQ1WZGdReclPSKxg00t-HIcR_LrA/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/eHQyX2drdk10LTNa/VVZvOFJGOVNRSGFI/YSZwaWQ9QXBp',
      name: 'Snickers',
      price: 150,
      quantity: 1,
      id: 12345,
     }
   ] 
  }

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void{
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  } 

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart(): void{
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem) : void {
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem) : void {
    this.cartService.removeQuantity(item)
  }
}
