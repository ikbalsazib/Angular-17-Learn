import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgCtrl',
  standalone: true
})
export class ImgCtrlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
