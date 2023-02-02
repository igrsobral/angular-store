import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-poducts-header',
  templateUrl: './products-header.component.html',
})
export class PoductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>()
  sort = 'desc'
  itemsToShow = 12


  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void{
    this.itemsToShow = count
  }

  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum)
  }
}
