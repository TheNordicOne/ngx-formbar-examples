import { NgxFwBlock } from 'ngx-formwork';

export interface NoteControl extends NgxFwBlock {
  type: 'note';

  message: string;
  severity?: 'info' | 'warn' | 'danger';
}
