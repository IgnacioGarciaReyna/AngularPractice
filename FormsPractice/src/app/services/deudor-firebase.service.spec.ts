import { TestBed } from '@angular/core/testing';

import { DeudorFirebaseService } from './deudor-firebase.service';

describe('DeudorFirebaseService', () => {
  let service: DeudorFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeudorFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
