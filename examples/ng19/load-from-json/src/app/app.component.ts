import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgxFwForm, NgxFwFormComponent } from 'ngx-formwork';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControls } from './shared/helper/form.type';

@Component({
  selector: 'app-root',
  imports: [NgxFwFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'load-from-json';

  private readonly formBuilder = inject(FormBuilder);
  private readonly httpClient = inject(HttpClient);

  form = this.formBuilder.group({});

  readonly formContent = toSignal(
    this.httpClient.get<NgxFwForm<FormControls>>('/maintenanceForm.json'),
  );

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(`this.form.value`, this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
