import { NgxFwControl } from 'ngx-formwork';

export interface TextareaControl extends NgxFwControl {
  type: 'textarea';
  rows?: number;
  maxLength?: number;
  placeHolder?: string;
}
