import { Component, computed, inject, Signal } from '@angular/core';
import { NgxfbBlockDirective } from '@ngx-formbar/core';
import { NoteControl } from './note-control.type';
import { ngxfbBlockHostDirective, viewProviders } from '../../helper';

@Component({
  selector: 'app-note-control',
  imports: [],
  templateUrl: './note-control.component.html',
  viewProviders: viewProviders,
  hostDirectives: [ngxfbBlockHostDirective],
  host: {
    '[style.--color]': 'color()',
    '[style.--background]': 'background()',
  },
})
export class NoteControlComponent {
  private readonly block = inject(NgxfbBlockDirective<NoteControl>);
  readonly content: Signal<NoteControl> = this.block.content;

  readonly message = computed(() => this.content().message);
  readonly severity = computed(() => this.content().severity ?? 'info');
  readonly color = computed(() => {
    switch (this.severity()) {
      case 'info':
        return 'hsl(221,83%,53%)';
      case 'warn':
        return 'hsl(32,95%,44%)';
      case 'danger':
        return 'hsl(0,72%,51%)';
    }
  });

  readonly background = computed(() => {
    switch (this.severity()) {
      case 'info':
        return 'hsl(221,83%,73%)';
      case 'warn':
        return 'hsl(32,95%,64%)';
      case 'danger':
        return 'hsl(0,72%,71%)';
    }
  });
}
