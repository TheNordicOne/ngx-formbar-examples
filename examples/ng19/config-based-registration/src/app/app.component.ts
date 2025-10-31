import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { maintenanceForm } from './forms/maintenance-form';
import { NgxfbFormComponent } from '@ngx-formbar/core';

@Component({
  selector: 'app-root',
  imports: [NgxfbFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'token-based-registration';

  private readonly formBuilder = inject(FormBuilder);
  readonly formContent = maintenanceForm;

  form = this.formBuilder.group({});

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(`this.form.value`, this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
