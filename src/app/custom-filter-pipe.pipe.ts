import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilterPipe',
  standalone: true
})
export class CustomFilterPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
