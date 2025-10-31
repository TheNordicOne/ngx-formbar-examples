import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfbControlDirective } from '@ngx-formbar/core';
import { CheckboxControl } from './checkbox-control.type';
import { ngxfbControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-checkbox-control',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class CheckboxControlComponent {
  private readonly control = inject(NgxfbControlDirective<CheckboxControl>);
  readonly content: Signal<CheckboxControl> = this.control.content;

  readonly label = computed(
    () => this.control.dynamicLabel() ?? this.content().label,
  );
  readonly name: Signal<string> = this.control.name;
  readonly isHidden = this.control.isHidden;
  readonly readonly = this.control.readonly;
}
