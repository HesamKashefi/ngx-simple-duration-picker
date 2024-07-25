import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSimpleDurationPickerComponent } from '../../../ngx-duration-picker/src/public-api';
import { Duration } from '../../../ngx-duration-picker/src/lib/duration';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSimpleDurationPickerComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';

  form = new FormGroup({
    totalSeconds: new FormControl(3652)
  })

  model: Duration = new Duration(1, 10, 20);

  valueChanged(event: number | Duration) {
    console.log(event);

  }
}
