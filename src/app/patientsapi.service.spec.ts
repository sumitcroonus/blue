import { TestBed } from '@angular/core/testing';

import { PatientsapiService } from './patientsapi.service';

describe('PatientsapiService', () => {
  let service: PatientsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
