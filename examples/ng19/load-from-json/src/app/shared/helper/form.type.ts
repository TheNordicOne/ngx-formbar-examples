import { TextControl } from '../controls/text/text-control.type';
import { NumberControl } from '../controls/number/number-control.type';
import { CheckboxControl } from '../controls/checkbox/checkbox-control.type';
import { RadioControl } from '../controls/radio/radio-control.type';
import { DropdownControl } from '../controls/dropdown/dropdown-control.type';
import { GroupControl } from '../controls/group/group-control.type';
import { NoteControl } from '../blocks/note/note-control.type';

export type FormControls =
  | TextControl
  | NumberControl
  | CheckboxControl
  | RadioControl
  | DropdownControl
  | GroupControl
  | NoteControl;
