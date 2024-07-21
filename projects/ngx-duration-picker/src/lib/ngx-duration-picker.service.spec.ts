import { TestBed } from '@angular/core/testing';

import { NgxDurationPickerService } from './ngx-duration-picker.service';

describe('NgxDurationPickerService', () => {
  let service: NgxDurationPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDurationPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
