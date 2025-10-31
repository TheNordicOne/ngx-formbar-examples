import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgxFbForm, NgxfbFormComponent } from '@ngx-formbar/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControls } from './shared/helper/form.type';

@Component({
  selector: 'app-root',
  imports: [NgxfbFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'load-from-json';

  private readonly formBuilder = inject(FormBuilder);
  private readonly httpClient = inject(HttpClient);

  form = this.formBuilder.group({});

  readonly formContent = toSignal(
    this.httpClient.get<NgxFbForm<FormControls>>('/maintenanceForm.json'),
  );

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(`this.form.value`, this.form.value);
  }

  reset() {
    this.form.reset();
  }
}
