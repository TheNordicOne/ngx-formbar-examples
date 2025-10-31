import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { maintenanceForm } from './forms/maintenance-form';
import { NgxfbFormComponent } from '@ngx-formbar/core';
import { HybridComponentResolver } from './shared/resolvers/component-resolver';
import { RadioControlComponent } from './shared/controls/radio/radio-control.component';
import { DropdownControlComponent } from './shared/controls/dropdown/dropdown-control.component';

@Component({
  selector: 'app-root',
  imports: [NgxfbFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'token-based-registration';

  private readonly formBuilder = inject(FormBuilder);
  private readonly componentResolver = inject(HybridComponentResolver);
  readonly formContent = maintenanceForm;

  form = this.formBuilder.group({});

  setChoiceMode(mode: 'radio' | 'dropdown') {
    switch (mode) {
      case 'radio':
        this.componentResolver.updateDynamicComponent(
          'choice',
          RadioControlComponent,
        );
        break;
      case 'dropdown':
        this.componentResolver.updateDynamicComponent(
          'choice',
          DropdownControlComponent,
        );
        break;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(`this.form.value`, this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
