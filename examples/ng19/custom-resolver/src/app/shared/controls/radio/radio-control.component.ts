import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { RadioControl } from './radio-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-radio-control',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class RadioControlComponent {
  private readonly control = inject(NgxfwControlDirective<RadioControl>);
  readonly content: Signal<RadioControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly options = computed(() => this.content().options);
  readonly isHidden = this.control.isHidden;
}
