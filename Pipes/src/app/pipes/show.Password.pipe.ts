import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showPassword',
})
export class showPasswordPipe implements PipeTransform {
  transform(password: string, showPassword: boolean = false) {
    if (showPassword) {
      return password;
    }
    return password.split('').map( _ => '*').join('');
  }
}
