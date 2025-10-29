import { NgxFwControl } from 'ngx-formwork';

export interface DropdownControl extends NgxFwControl {
  type: 'dropdown';

  options: { id: string; value: string; label: string }[];
}
