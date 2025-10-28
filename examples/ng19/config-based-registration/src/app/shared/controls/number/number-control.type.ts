import { NgxFwControl } from 'ngx-formwork';

export interface NumberControl extends NgxFwControl {
  type: 'number';

  min: number;
  max?: number;
}
