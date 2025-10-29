import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { NumberControl } from './number-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-number-control',
  imports: [ReactiveFormsModule],
  templateUrl: './number-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class NumberControlComponent {
  private readonly control = inject(NgxfwControlDirective<NumberControl>);
  readonly content: Signal<NumberControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly min = computed(() => this.content().min);
  readonly max = computed(() => this.content().max ?? null);
  readonly isHidden = this.control.isHidden;
}
