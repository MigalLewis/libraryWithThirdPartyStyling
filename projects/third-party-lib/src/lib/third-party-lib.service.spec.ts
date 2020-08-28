import { TestBed } from '@angular/core/testing';

import { ThirdPartyLibService } from './third-party-lib.service';

describe('ThirdPartyLibService', () => {
  let service: ThirdPartyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdPartyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
