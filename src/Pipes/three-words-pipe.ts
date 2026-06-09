import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeWords',
})
export class ThreeWordsPipe implements PipeTransform {
  transform( description  : string , three : number = 3): string {
    if (!description) {
      return '';
    }
    const words = description.split(' ');
    if (words.length <= three) {
      return description;
    }
    return words.slice(0, three).join(' ') + '...';
  }
}
