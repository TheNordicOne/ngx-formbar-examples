import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {maintenanceForm} from './forms/maintenance-form';
import {NgxFwFormComponent} from 'ngx-formwork';
import {highlyComputedForm} from './forms/highly-computed-form';

@Component({
  selector: 'app-root',
  imports: [NgxFwFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'token-based-registration';

  private readonly formBuilder = inject(FormBuilder);
  formContent = maintenanceForm;

  form = this.formBuilder.group({});

  useForm(key: 'maintenance' | 'computed') {
    this.formContent = key === 'computed' ? highlyComputedForm : maintenanceForm;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(`this.form.value`, this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
