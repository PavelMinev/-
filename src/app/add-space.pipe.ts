import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpace'
})
export class AddSpacePipe implements PipeTransform {

  transform(value: number, args?: any): string {
  	if(value <=0) return "0";
    return (((value/1000|0) > 0 )? ((value/1000|0) + " ") : "") + value % 1000;
  }

}
