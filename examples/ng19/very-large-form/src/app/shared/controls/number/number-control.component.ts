import {Component, computed, inject, Signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxfbControlDirective} from '@ngx-formbar/core';
import {NumberControl} from './number-control.type';
import {ngxfbControlHostDirective, viewProviders} from '../../helper';

@Component({
  selector: 'app-number-control',
  imports: [ReactiveFormsModule],
  templateUrl: './number-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class NumberControlComponent {
  private readonly control = inject(NgxfbControlDirective<NumberControl>);
  readonly content: Signal<NumberControl> = this.control.content;

  readonly label = computed(
    () => this.control.dynamicLabel() ?? this.content().label,
  );
  readonly name: Signal<string> = this.control.name;
  readonly min = computed(() => this.content().min);
  readonly max = computed(() => this.content().max ?? null);
  readonly isHidden = this.control.isHidden;
  readonly readonly = this.control.readonly;
}
