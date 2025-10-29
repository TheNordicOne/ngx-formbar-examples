import { Component, computed, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxfwControlDirective } from 'ngx-formwork';
import { FileControl } from './file-control.type';
import { ngxfwControlHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-file-control',
  imports: [ReactiveFormsModule],
  templateUrl: './file-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfwControlHostDirective],
})
export class FileControlComponent {
  private readonly control = inject(NgxfwControlDirective<FileControl>);
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
