import { Component , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  imports: [],
  templateUrl: './radio.html',
  styleUrl: './radio.css',
})
export class Radio {
  selectedSort: number = 0;

 
  constructor() {  }
  @Output() sortChanged = new EventEmitter<string>()
   onRadioChange(event :any){
    this.selectedSort = event.target.value
    this.sortChanged.emit(this.selectedSort.toString());

  }

}
