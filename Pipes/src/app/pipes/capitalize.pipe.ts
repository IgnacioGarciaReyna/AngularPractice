import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, soloPrimeraLetra: boolean = false) {
    // let listWords: string[] = value.split(' ');
    // let listWordCapitalize: string[] = listWords.map(
    //   (word) =>
    //     word[0].toLocaleUpperCase() +
    //     word.substring(1, word.length).toLowerCase()
    // );
    // let resultadoFinal = listWordCapitalize.join(' ');
    // return resultadoFinal;

    if (soloPrimeraLetra) {
      return (
        value[0].toUpperCase() +
        value.substring(1, value.length).toLowerCase()
      );
    }
    return value
      .split(' ')
      .map(
        (word) =>
          word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
      )
      .join(' ');
  }
}
