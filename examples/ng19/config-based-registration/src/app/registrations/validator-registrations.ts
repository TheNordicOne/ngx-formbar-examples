import { RegistrationRecord, ValidatorConfig } from 'ngx-formwork';
import { Validators } from '@angular/forms';
import {
  alnumDash,
  circuitPattern,
  floorPattern,
  integer,
  isoDate,
  min0,
  minLen,
  range1to10,
  range1to480,
  requiredWhenCritical,
  requiredWhenCriticalOrNeeded,
  requiredWhenVisible,
} from '../shared/validation/sync.validators';

export const validatorRegistrations: ValidatorConfig<RegistrationRecord> = {
  // Built-ins / direct aliases
  required: [Validators.required],
  requiredTrue: [Validators.requiredTrue],
  email: [Validators.email],

  // Length
  min2Characters: [minLen(2)],
  min20Characters: [minLen(20)],

  // Numeric
  integer: [integer],
  min0: [min0],
  range1to10: [range1to10],
  range1to480: [range1to480],

  // Patterns / formats
  floorPattern: [floorPattern],
  alnumDash: [alnumDash],
  circuitPattern: [circuitPattern],
  isoDate: [isoDate],

  // Conditional requireds
  requiredWhenVisible: [requiredWhenVisible],
  requiredWhenCritical: [requiredWhenCritical],
  requiredWhenCriticalOrNeeded: [requiredWhenCriticalOrNeeded],
};
