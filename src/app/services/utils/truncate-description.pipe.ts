import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription',
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value?.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }
    return value;
  }
}
