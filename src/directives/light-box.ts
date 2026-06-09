import { Directive ,  Input , HostBinding } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
})
export class LightBox {
  
  @Input() appLightBox : boolean = false
  @HostBinding('class.light-box') get isLight(){
    return !this.appLightBox
  }

  @HostBinding('class.dark') get isDark(){
    return this.appLightBox
  }
  constructor() {}
}
