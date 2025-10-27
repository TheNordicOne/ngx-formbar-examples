import { NgxFwControl } from 'ngx-formwork';

export interface RadioControl extends NgxFwControl {
  type: 'radio';

  options: { id: string; value: string; label: string }[];
}
