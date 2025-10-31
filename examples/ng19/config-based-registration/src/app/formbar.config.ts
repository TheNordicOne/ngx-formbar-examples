import { defineFormbarConfig } from '@ngx-formbar/core';
import {
  asyncValidatorRegistrations,
  componentRegistrations,
  validatorRegistrations,
} from './registrations';

export const formbarConfig = defineFormbarConfig({
  componentRegistrations,
  validatorRegistrations,
  asyncValidatorRegistrations,
});
