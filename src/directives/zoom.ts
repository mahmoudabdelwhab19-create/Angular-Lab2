import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class Zoom {
  constructor( private element : ElementRef ) { }

 @HostListener('mouseenter') onMouseEnter() {
  
  this.element.nativeElement.style.transform = 'scale(1.2)';
}  
@HostListener('mouseleave') onMouseLeave() {
  this.element.nativeElement.style.transform = 'scale(1)'; 
}
}