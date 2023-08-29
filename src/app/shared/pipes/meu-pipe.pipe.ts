import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})


export class MeuPipePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value)
    return value.toUpperCase();
    else
    return "";
  }

}

@Pipe({
  name: 'caixaAlta'
  })
  export class CaixaAltaPipe implements PipeTransform {
    transform(value: string | undefined): string {
      if (value)
        return value.toUpperCase();
      else
        return "";
    }
  }