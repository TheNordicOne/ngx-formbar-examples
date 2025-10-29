import { Type } from '@angular/core';
import { NGX_FW_COMPONENT_REGISTRATIONS } from 'ngx-formwork';
import { TextControlComponent } from '../shared/controls/text/text-control.component';
import { NumberControlComponent } from '../shared/controls/number/number-control.component';
import { CheckboxControlComponent } from '../shared/controls/checkbox/checkbox-control.component';
import { RadioControlComponent } from '../shared/controls/radio/radio-control.component';
import { DropdownControlComponent } from '../shared/controls/dropdown/dropdown-control.component';
import { GroupControlComponent } from '../shared/controls/group/group-control.component';
import { NoteControlComponent } from '../shared/blocks/note/note-control.component';
import { TextareaControlComponent } from '../shared/controls/textarea/textarea-control.component';
import { DateControlComponent } from '../shared/controls/date/date-control.component';
import { FileControlComponent } from '../shared/controls/file/file-control.component';

export const componentRegistrationsProvider = {
  provide: NGX_FW_COMPONENT_REGISTRATIONS,
  useValue: new Map<string, Type<unknown>>([
    ['text', TextControlComponent],
    ['number', NumberControlComponent],
    ['checkbox', CheckboxControlComponent],
    ['radio', RadioControlComponent],
    ['dropdown', DropdownControlComponent],
    ['group', GroupControlComponent],
    ['note', NoteControlComponent],
    ["textarea", TextareaControlComponent],
    ["date", DateControlComponent],
    ["file", FileControlComponent]
]),
};
