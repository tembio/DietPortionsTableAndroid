import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({name: 'vegetables'})
export class VegetablesPipe implements PipeTransform {
  transform(portion, args?): any {
    return portion?"Libre":"";
  }
}
