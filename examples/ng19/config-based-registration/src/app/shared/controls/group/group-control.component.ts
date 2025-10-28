import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxfwAbstractControlDirective,
  NgxFwContent,
  NgxfwGroupDirective,
} from 'ngx-formwork';
import { GroupControl } from './group-control.type';
import { ngxfwGroupHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-group-control',
  imports: [ReactiveFormsModule, NgxfwAbstractControlDirective],
  templateUrl: './group-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwGroupHostDirective],
})
export class GroupControlComponent {
  private readonly group = inject(NgxfwGroupDirective<GroupControl>);
  readonly content: Signal<GroupControl> = this.group.content;
  readonly name: Signal<string> = this.group.name;

  readonly controls: Signal<[string, NgxFwContent][]> = this.group.controls;
  readonly isHidden = this.group.isHidden;
  readonly legend = computed(() => this.content().legend);
}
