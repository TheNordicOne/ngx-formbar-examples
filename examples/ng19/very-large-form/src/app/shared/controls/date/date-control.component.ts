import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { DateControl } from './date-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-date-control',
  imports: [ReactiveFormsModule],
  templateUrl: './date-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class DateControlComponent {
  private readonly control = inject(NgxfwControlDirective<DateControl>);
  readonly content: Signal<DateControl> = this.control.content;
  readonly name: Signal<string> = this.control.name;

  readonly label = computed(
    () => this.control.dynamicLabel() ?? this.content().label,
  );

  readonly minDate = computed(() => this.content().minDate);
  readonly maxDate = computed(() => this.content().maxDate);
  readonly isHidden = this.control.isHidden;
  readonly readonly = this.control.readonly;
}
