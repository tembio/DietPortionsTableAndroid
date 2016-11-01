import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({name: 'isNull'})
export class IsNullPipe implements PipeTransform {
  transform(portion, args?): any {
    return portion?portion:"";
  }
}
