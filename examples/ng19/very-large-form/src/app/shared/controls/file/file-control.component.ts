import {Component, computed, inject, Signal} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxfbControlDirective} from '@ngx-formbar/core';
import {FileControl} from './file-control.type';
import {ngxfbControlHostDirective, viewProviders} from '../../helper';

@Component({
  selector: 'app-file-control',
  imports: [ReactiveFormsModule],
  templateUrl: './file-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbControlHostDirective],
})
export class FileControlComponent {
  private readonly control = inject(NgxfbControlDirective<FileControl>);
  readonly content: Signal<FileControl> = this.control.content;
  readonly name: Signal<string> = this.control.name;

  readonly label = computed(
    () => this.control.dynamicLabel() ?? this.content().label,
  );

  readonly multiple = computed(() => this.content().multiple);
  readonly accept = computed(() => this.content().accept);
  readonly isHidden = this.control.isHidden;
  readonly readonly = this.control.readonly;
}
