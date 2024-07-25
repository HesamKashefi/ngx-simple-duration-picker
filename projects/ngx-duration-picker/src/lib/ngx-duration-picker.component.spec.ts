import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleDurationPickerComponent } from './ngx-duration-picker.component';

describe('NgxSimpleDurationPickerComponent', () => {
  let component: NgxSimpleDurationPickerComponent;
  let fixture: ComponentFixture<NgxSimpleDurationPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSimpleDurationPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSimpleDurationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
