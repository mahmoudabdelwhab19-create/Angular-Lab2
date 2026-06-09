import { Component, Input  } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-total-price',
  imports: [CurrencyPipe],
  templateUrl: './total-price.html',
  styleUrl: './total-price.css',
})
export class TotalPrice {
  @Input() totalPrice: number = 0;
}