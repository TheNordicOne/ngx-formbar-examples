import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NGX_FW_COMPONENT_RESOLVER, provideFormbar } from '@ngx-formbar/core';
import { formbarConfig } from './formbar.config';
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
    provideFormbar(formbarConfig),
    componentRegistrationsProvider,
    validatorRegistrationsProvider,
    asyncValidatorRegistrationsProvider,
    {
      provide: NGX_FW_COMPONENT_RESOLVER,
      useClass: HybridComponentResolver,
    },
    // Provide custom resolver so that it can be injected and used with its implementation, while using same instance as formbar
    {
      provide: HybridComponentResolver,
      useExisting: NGX_FW_COMPONENT_RESOLVER,
    },
  ],
};
