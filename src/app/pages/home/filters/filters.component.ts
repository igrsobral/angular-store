import { Component , EventEmitter, Output,  OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>()

  categories = ['shoes', 'sports'];
  
  constructor(){}

   ngOnInit(): void {

   }

   onShowCategory(category: string): void{

   }
}
