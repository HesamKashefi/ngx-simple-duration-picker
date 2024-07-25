import { TestBed } from '@angular/core/testing';

import { NgxSimpleDurationPickerService } from './ngx-duration-picker.service';

describe('NgxSimpleDurationPickerService', () => {
  let service: NgxSimpleDurationPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleDurationPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
