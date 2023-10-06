import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  transform(value: Date | string) : string {
      if(value instanceof Date) {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Intl.DateTimeFormat('uk-UA', options).format(value);
      }
      else if (value && value.toLowerCase() === 'now') {
        return 'тепер.час';
      }
      else {
        return 'Некорректна дата';
      }
  }
}