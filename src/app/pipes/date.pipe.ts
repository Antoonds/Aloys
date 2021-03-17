import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  // tslint:disable-next-line:typedef
  transform(value: any) {
    return moment(value).format('D MMMM');
  }

}
