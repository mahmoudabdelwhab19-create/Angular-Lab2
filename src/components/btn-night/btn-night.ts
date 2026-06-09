import { Component } from '@angular/core';
import { LightBox } from '../../directives/light-box';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-btn-night',
  imports: [LightBox, NgClass],
  templateUrl: './btn-night.html',
  styleUrl: './btn-night.css',
})
export class BtnNight {
  isActivee : boolean = false
constructor(  ){

}
  toggle( ){
    this.isActivee = !this.isActivee
   
  }
}