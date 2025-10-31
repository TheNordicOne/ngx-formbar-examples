import { AsyncValidatorFn } from '@angular/forms';
import { NGX_FW_ASYNC_VALIDATOR_REGISTRATIONS } from '@ngx-formbar/core';
import {
  approverActive,
  emailDomainAllowed,
  roomExists,
  unitKnownAtLocation,
} from '../shared/validation/async.validators';

export const asyncValidatorRegistrationsProvider = {
  provide: NGX_FW_ASYNC_VALIDATOR_REGISTRATIONS,
  useValue: new Map<string, AsyncValidatorFn[]>([
    ['emailDomainAllowed', [emailDomainAllowed]],
    ['roomExists', [roomExists]],
    ['unitKnownAtLocation', [unitKnownAtLocation]],
    ['approverActive', [approverActive]],
  ]),
};
