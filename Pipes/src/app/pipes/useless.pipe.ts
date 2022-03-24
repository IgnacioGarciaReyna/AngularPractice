import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'useless',
})
export class UselessPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    console.log(args);
    return `${args[0]}+${args[1]}`;
  }
}
