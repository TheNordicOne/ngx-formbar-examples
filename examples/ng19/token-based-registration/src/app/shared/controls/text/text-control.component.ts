import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfbControlDirective } from '@ngx-formbar/core';
import { TextControl } from './text-control.type';
import { ngxfbControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-text-control',
  imports: [ReactiveFormsModule],
  templateUrl: './text-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class TextControlComponent {
  private readonly control = inject(NgxfbControlDirective<TextControl>);
  readonly content: Signal<TextControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly hint = computed(() => this.content().hint);
  readonly placeholder = computed(() => this.content().placeHolder);
  readonly isHidden = this.control.isHidden;
}
