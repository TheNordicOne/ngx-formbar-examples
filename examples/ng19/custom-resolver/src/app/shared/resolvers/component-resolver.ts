import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  Type,
} from '@angular/core';
import {
  ComponentResolver,
  NGX_FW_COMPONENT_REGISTRATIONS,
} from '@ngx-formbar/core';

@Injectable()
export class HybridComponentResolver implements ComponentResolver {
  // Inject the default registrations
  private readonly defaultRegistrations = inject(
    NGX_FW_COMPONENT_REGISTRATIONS,
  );

  // Create your dynamic registrations
  private readonly dynamicRegistrations = signal(
    new Map<string, Type<unknown>>(),
  );

  // Combine them with computed
  readonly registrations: Signal<ReadonlyMap<string, Type<unknown>>> = computed(
    () => {
      const result = new Map<string, Type<unknown>>(this.defaultRegistrations);

      // Override with dynamic registrations
      for (const [key, component] of this.dynamicRegistrations()) {
        result.set(key, component);
      }
      console.log('Effective registrations', result);
      return result;
    },
  );

  // Methods to update dynamic registrations
  updateDynamicComponent(key: string, component: Type<unknown>): void {
    const current = new Map(this.dynamicRegistrations());
    current.set(key, component);
    this.dynamicRegistrations.set(current);
  }
}
