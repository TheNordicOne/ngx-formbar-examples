import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { TextControl } from './text-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-text-control',
  imports: [ReactiveFormsModule],
  templateUrl: './text-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class TextControlComponent {
  private readonly control = inject(NgxfwControlDirective<TextControl>);
  readonly content: Signal<TextControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly hint = computed(() => this.content().hint);
  readonly placeholder = computed(() => this.content().placeHolder);
  readonly isHidden = this.control.isHidden;
}
