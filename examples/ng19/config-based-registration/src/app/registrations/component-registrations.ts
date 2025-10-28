import { ComponentRegistrationConfig } from 'ngx-formwork';
import { TextControlComponent } from '../shared/controls/text/text-control.component';
import { NumberControlComponent } from '../shared/controls/number/number-control.component';
import { CheckboxControlComponent } from '../shared/controls/checkbox/checkbox-control.component';
import { RadioControlComponent } from '../shared/controls/radio/radio-control.component';
import { DropdownControlComponent } from '../shared/controls/dropdown/dropdown-control.component';
import { GroupControlComponent } from '../shared/controls/group/group-control.component';
import { NoteControlComponent } from '../shared/blocks/note/note-control.component';

export const componentRegistrations: ComponentRegistrationConfig = {
  text: TextControlComponent,
  number: NumberControlComponent,
  checkbox: CheckboxControlComponent,
  radio: RadioControlComponent,
  dropdown: DropdownControlComponent,
  group: GroupControlComponent,
  note: NoteControlComponent,
};
