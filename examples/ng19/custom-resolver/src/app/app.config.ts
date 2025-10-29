import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NGX_FW_COMPONENT_RESOLVER, provideFormwork } from 'ngx-formwork';
import { formworkConfig } from './formwork.config';
import {
  asyncValidatorRegistrationsProvider,
  componentRegistrationsProvider,
  validatorRegistrationsProvider,
} from './registrations';
import { HybridComponentResolver } from './shared/resolvers/component-resolver';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFormwork(formworkConfig),
    componentRegistrationsProvider,
    validatorRegistrationsProvider,
    asyncValidatorRegistrationsProvider,
    {
      provide: NGX_FW_COMPONENT_RESOLVER,
      useClass: HybridComponentResolver,
    },
    // Provide custom resolver so that it can be injected and used with its implementation, while using same instance as formwork
    {
      provide: HybridComponentResolver,
      useExisting: NGX_FW_COMPONENT_RESOLVER,
    },
  ],
};
