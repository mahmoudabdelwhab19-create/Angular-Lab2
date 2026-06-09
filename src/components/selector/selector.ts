import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-selector',
  imports: [],
  templateUrl: './selector.html',
  styleUrl: './selector.css',
})
export class Selector {
  productCategory: ICategory[]
  constructor(){
    this.productCategory = [
  {
    "id": 1,
    "name": "beauty"
  },
  {
    "id": 2,
    "name": "fragrances"
  },
  {
    "id": 3,
    "name": "furniture"
  },
  {
    "id": 4,
    "name": "groceries"
  }
]
}
@Output() categoryChanged = new EventEmitter<string>()

selectedId : number = 0;
onCategoryChange(event : any){
  this.selectedId = Number(event.target.value);
  this.categoryChanged.emit(this.selectedId.toString())
}
}