import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-NgxDurationPicker',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ngx-duration-picker.component.html',
  styleUrls: ['./ngx-duration-picker.component.scss']
})
export class NgxDurationPickerComponent {
  form = new FormGroup({
    hours: new FormControl(0, [Validators.min(0)]),
    minutes: new FormControl(0, [Validators.min(0)]),
    seconds: new FormControl(0, [Validators.min(0)])
  });
}
