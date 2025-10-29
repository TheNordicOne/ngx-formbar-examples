import { NgxFwFormGroup } from 'ngx-formwork';

export interface GroupControl extends NgxFwFormGroup {
  type: 'group';
  legend: string;
}
