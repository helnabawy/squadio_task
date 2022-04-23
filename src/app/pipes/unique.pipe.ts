import { Pipe, PipeTransform } from '@angular/core';
import {IContact} from '../types/contacts';
import * as _ from 'lodash';
@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value?: IContact[], ...args: unknown[]): unknown {
    if (value && value.length > 5) {
      return _.uniqBy(value, 'contactId');
    }
    return value;
  }

}
