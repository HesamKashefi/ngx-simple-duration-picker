import { Component, DestroyRef, EventEmitter, forwardRef, inject, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { Duration } from './duration';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'NgxDurationPicker',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ngx-duration-picker.component.html',
  styleUrls: ['./ngx-duration-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxDurationPickerComponent),
      multi: true
    }
  ]
})
export class NgxDurationPickerComponent implements OnInit, ControlValueAccessor {
  private destroyRef$ = inject(DestroyRef);

  @Input()
  readOnly: boolean = false;

  @Input()
  outputValueAsTotalSeconds = false;

  @Output()
  valueChagned = new EventEmitter<Duration | number>();

  onChange: any;
  onTouch: any;
  writeValue(obj: Duration | number): void {
    if (obj instanceof Duration) {
      this.form.patchValue(obj);
    }
    else {
      this.form.patchValue(Duration.fromSeconds(+obj));
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    }
    else {
      this.form.enable();
    }
  }

  form = new FormGroup({
    hours: new FormControl(0, { validators: [Validators.min(0), Validators.max(59)], nonNullable: true }),
    minutes: new FormControl(0, { validators: [Validators.min(0), Validators.max(59)], nonNullable: true }),
    seconds: new FormControl(0, { validators: [Validators.min(0)], nonNullable: true }),
  });

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        debounceTime(100),
        takeUntilDestroyed(this.destroyRef$)
      )
      .subscribe(value => {
        const rawValue = this.form.getRawValue();
        const duration: Duration = new Duration(rawValue.hours, rawValue.minutes, rawValue.seconds);

        if (rawValue.seconds >= 60 || rawValue.minutes >= 60) {
          if (rawValue.seconds >= 60) {
            this.form.patchValue({
              minutes: rawValue.minutes + Math.floor(rawValue.seconds / 60),
              seconds: rawValue.seconds % 60
            });
          }
          if (rawValue.minutes >= 60) {
            this.form.patchValue({
              hours: rawValue.hours + Math.floor(rawValue.minutes / 60),
              minutes: rawValue.minutes % 60
            });
          }
          return;
        }
        if (rawValue.seconds < 0 || rawValue.minutes < 0 || rawValue.hours < 0) {
          this.form.patchValue({
            hours: Math.abs(rawValue.hours),
            minutes: Math.abs(rawValue.minutes),
            seconds: Math.abs(rawValue.seconds)
          });
          return;
        }
        if (rawValue.seconds === null || rawValue.minutes === null || rawValue.hours === null) {
          this.form.patchValue({
            hours: rawValue.hours || 0,
            minutes: rawValue.minutes || 0,
            seconds: rawValue.seconds || 0
          });
          return;
        }

        if (this.onChange) {
          if (this.outputValueAsTotalSeconds) {
            this.onChange(duration.toSeconds());
          }
          else {
            this.onChange(duration);
          }
        }

        if (this.outputValueAsTotalSeconds) {
          this.valueChagned.emit(duration.toSeconds());
        }
        else {
          this.valueChagned.emit(duration);
        }
      });
  }
}
