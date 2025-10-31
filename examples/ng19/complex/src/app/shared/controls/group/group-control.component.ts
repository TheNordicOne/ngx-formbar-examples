import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxfbAbstractControlDirective,
  NgxFbContent,
  NgxfbGroupDirective,
} from '@ngx-formbar/core';
import { GroupControl } from './group-control.type';
import { ngxfbGroupHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-group-control',
  imports: [ReactiveFormsModule, NgxfbAbstractControlDirective],
  templateUrl: './group-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbGroupHostDirective],
})
export class GroupControlComponent {
  private readonly group = inject(NgxfbGroupDirective<GroupControl>);
  readonly content: Signal<GroupControl> = this.group.content;
  readonly name: Signal<string> = this.group.name;

  readonly controls: Signal<[string, NgxFbContent][]> = this.group.controls;
  readonly isHidden = this.group.isHidden;
  readonly dynamicTitle = this.group.dynamicTitle;
  readonly legend = computed(() => this.content().legend);
}
