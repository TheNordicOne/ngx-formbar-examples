import {Component, computed, inject, Signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxfbControlDirective} from '@ngx-formbar/core';
import {RadioControl} from './radio-control.type';
import {ngxfbControlHostDirective, viewProviders} from '../../helper';

@Component({
  selector: 'app-radio-control',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class RadioControlComponent {
  private readonly control = inject(NgxfbControlDirective<RadioControl>);
  readonly content: Signal<RadioControl> = this.control.content;

  readonly label = computed(
    () => this.control.dynamicLabel() ?? this.content().label,
  );
  readonly name: Signal<string> = this.control.name;
  readonly options = computed(() => this.content().options);
  readonly isHidden = this.control.isHidden;
  readonly readonly = this.control.readonly;
}
