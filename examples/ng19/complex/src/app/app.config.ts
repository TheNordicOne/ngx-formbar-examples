import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFormwork } from 'ngx-formwork';
import { formworkConfig } from './formwork.config';
import { componentRegistrationsProvider } from './registrations';
import { validatorRegistrationsProvider } from './registrations';
import { asyncValidatorRegistrationsProvider } from './registrations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFormwork(formworkConfig),
    componentRegistrationsProvider,
    validatorRegistrationsProvider,
    asyncValidatorRegistrationsProvider,
  ],
};
