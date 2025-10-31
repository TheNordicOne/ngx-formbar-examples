import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFormbar } from '@ngx-formbar/core';
import { formbarConfig } from './formbar.config';
import {
  asyncValidatorRegistrationsProvider,
  componentRegistrationsProvider,
  validatorRegistrationsProvider,
} from './registrations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFormbar(formbarConfig),
    componentRegistrationsProvider,
    validatorRegistrationsProvider,
    asyncValidatorRegistrationsProvider,
  ],
};
