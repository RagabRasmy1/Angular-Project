import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartPipe',
})
export class CartPipePipe implements PipeTransform {
  transform(value: string): string {
    let res = '';
    for (let i = 0; i < value.length; i += 4) {
      res += value.slice(i, i + 4) + '-';
    }
    res = res.slice(0, -1) || '';
    return res;
  }
}
