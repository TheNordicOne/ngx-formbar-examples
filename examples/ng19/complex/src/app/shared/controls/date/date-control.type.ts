import { NgxFwControl } from 'ngx-formwork';

export interface DateControl extends NgxFwControl {
  type: 'date';
  minDate?: string;
  maxDate?: string;
}
