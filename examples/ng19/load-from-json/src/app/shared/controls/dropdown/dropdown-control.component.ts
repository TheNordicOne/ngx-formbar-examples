import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfbControlDirective } from '@ngx-formbar/core';
import { DropdownControl } from './dropdown-control.type';
import { ngxfbControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-dropdown-control',
  imports: [ReactiveFormsModule],
  templateUrl: './dropdown-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class DropdownControlComponent {
  private readonly control = inject(NgxfbControlDirective<DropdownControl>);
  readonly content: Signal<DropdownControl> = this.control.content;

  readonly label = computed(() => this.content().label);
  readonly name: Signal<string> = this.control.name;
  readonly options = computed(() => this.content().options);
  readonly isHidden = this.control.isHidden;
}
