import {Component, computed, inject, Signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxfbControlDirective} from '@ngx-formbar/core';
import {TextareaControl} from './textarea-control.type';
import {ngxfbControlHostDirective, viewProviders} from '../../helper';

@Component({
  selector: 'app-textarea-control',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class TextareaControlComponent {
  private readonly control = inject(NgxfbControlDirective<TextareaControl>);
  readonly content: Signal<TextareaControl> = this.control.content;
  readonly name: Signal<string> = this.control.name;

  readonly label = computed(
    () => this.control.dynamicLabel() ?? this.content().label,
  );
  readonly placeholder = computed(() => this.content().placeHolder);
  readonly rows = computed(() => this.content().rows);
  readonly maxLength = computed(() => this.content().maxLength ?? null);
  readonly isHidden = this.control.isHidden;
  readonly disabled = this.control.disabled;
  readonly readonly = this.control.readonly;
}
