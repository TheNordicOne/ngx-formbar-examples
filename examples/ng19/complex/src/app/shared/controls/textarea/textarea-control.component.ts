import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { TextareaControl } from './textarea-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-textarea-control',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class TextareaControlComponent {
  private readonly control = inject(NgxfwControlDirective<TextareaControl>);
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
