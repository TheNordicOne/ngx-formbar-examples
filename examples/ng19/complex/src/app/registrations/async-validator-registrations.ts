import { AsyncValidatorFn } from '@angular/forms';
import { NGX_FW_ASYNC_VALIDATOR_REGISTRATIONS } from 'ngx-formwork';
import {
  approverActive,
  emailDomainAllowed,
  roomExists,
  totalSizeUnder10mb,
  unitKnownAtLocation,
} from '../shared/validation/async.validators';

export const asyncValidatorRegistrationsProvider = {
  provide: NGX_FW_ASYNC_VALIDATOR_REGISTRATIONS,
  useValue: new Map<string, AsyncValidatorFn[]>([
    ['emailDomainAllowed', [emailDomainAllowed]],
    ['roomExists', [roomExists]],
    ['unitKnownAtLocation', [unitKnownAtLocation]],
    ['approverActive', [approverActive]],
    ['totalSizeUnder10mb', [totalSizeUnder10mb]],
  ]),
};
