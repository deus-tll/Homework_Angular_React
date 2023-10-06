import { TestBed } from '@angular/core/testing';

import { WondersService } from './wonders.service';

describe('WondersService', () => {
  let service: WondersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WondersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
