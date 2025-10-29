import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { DropdownControl } from './dropdown-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-dropdown-control',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class DropdownControlComponent {
  private readonly control = inject(NgxfwControlDirective<DropdownControl>);
  readonly content: Signal<DropdownControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly options = computed(() => this.content().options);
  readonly isHidden = this.control.isHidden;
}
