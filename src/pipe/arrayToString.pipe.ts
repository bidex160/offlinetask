import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  standalone: true,
  name: 'arrayToString',
})
export class arrayToStringPipe implements PipeTransform {
  transform(value: string[]): string {
    console.log(value)
    console.log(value.join("\n").toString())
    return value.join("\n").toString();
  }
}