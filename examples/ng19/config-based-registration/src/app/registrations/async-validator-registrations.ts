import { AsyncValidatorConfig, RegistrationRecord } from '@ngx-formbar/core';
import {
  approverActive,
  emailDomainAllowed,
  roomExists,
  unitKnownAtLocation,
} from '../shared/validation/async.validators';

export const asyncValidatorRegistrations: AsyncValidatorConfig<RegistrationRecord> =
  {
    emailDomainAllowed: [emailDomainAllowed],
    roomExists: [roomExists],
    unitKnownAtLocation: [unitKnownAtLocation],
    approverActive: [approverActive],
  };
