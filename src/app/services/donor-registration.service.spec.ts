import { TestBed } from '@angular/core/testing';

import { DonorRegistrationService } from './donor-registration.service';

describe('DonorRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonorRegistrationService = TestBed.get(DonorRegistrationService);
    expect(service).toBeTruthy();
  });
});
