import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: string, args?: any): string{
    return value.replace(/<(?:.|\n)*?>/gm, ''); // barra gm no distingue entre mayusculas y minúsculas
  }

}
