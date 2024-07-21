import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDurationPickerComponent } from './ngx-duration-picker.component';

describe('NgxDurationPickerComponent', () => {
  let component: NgxDurationPickerComponent;
  let fixture: ComponentFixture<NgxDurationPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDurationPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDurationPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
