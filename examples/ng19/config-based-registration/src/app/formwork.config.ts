import { defineFormworkConfig } from 'ngx-formwork';
import { componentRegistrations, validatorRegistrations, asyncValidatorRegistrations } from './registrations';

export const formworkConfig = defineFormworkConfig({
  componentRegistrations,
  validatorRegistrations,
  asyncValidatorRegistrations
});

