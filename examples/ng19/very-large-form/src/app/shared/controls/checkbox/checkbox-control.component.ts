import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { CheckboxControl } from './checkbox-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-checkbox-control',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class CheckboxControlComponent {
  private readonly control = inject(NgxfwControlDirective<CheckboxControl>);
  readonly content: Signal<CheckboxControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly isHidden = this.control.isHidden;
}
