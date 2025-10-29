import { NgxFwControl } from 'ngx-formwork';

export interface TextControl extends NgxFwControl {
  type: 'text';
  defaultValue?: string;

  hint?: string;
  placeHolder?: string;
}
