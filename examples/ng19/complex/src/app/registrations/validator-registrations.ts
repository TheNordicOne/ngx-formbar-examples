import { ValidatorFn, Validators } from '@angular/forms';
import { NGX_FW_VALIDATOR_REGISTRATIONS } from '@ngx-formbar/core';
import {
  alnumDash,
  circuitPattern,
  fileTypesAllowed,
  floorPattern,
  integer,
  isoDate,
  maxFiles5,
  min0,
  min1,
  minLen,
  range1to10,
  range1to480,
  requiredWhenCritical,
  requiredWhenCriticalOrNeeded,
  requiredWhenVisible,
} from '../shared/validation/sync.validators';

export const validatorRegistrationsProvider = {
  provide: NGX_FW_VALIDATOR_REGISTRATIONS,
  useValue: new Map<string, ValidatorFn[]>([
    // Built-ins / direct aliases
    ['required', [Validators.required]],
    ['requiredTrue', [Validators.requiredTrue]],
    ['email', [Validators.email]],

    // Length
    ['min2Characters', [minLen(2)]],
    ['min20Characters', [minLen(20)]],

    // Numeric
    ['integer', [integer]],
    ['min0', [min0]],
    ['min1', [min1]],
    ['range1to10', [range1to10]],
    ['range1to480', [range1to480]],

    // Patterns / formats
    ['floorPattern', [floorPattern]],
    ['alnumDash', [alnumDash]],
    ['circuitPattern', [circuitPattern]],
    ['isoDate', [isoDate]],

    // Conditional requireds
    ['requiredWhenVisible', [requiredWhenVisible]],
    ['requiredWhenCritical', [requiredWhenCritical]],
    ['requiredWhenCriticalOrNeeded', [requiredWhenCriticalOrNeeded]],

    // Other
    ['maxFiles5', [maxFiles5]],
    ['imagesOrPdf', [fileTypesAllowed(['image/*', 'application/pdf', '.pdf'])]],
  ]),
};
