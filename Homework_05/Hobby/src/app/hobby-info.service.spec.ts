import { TestBed } from '@angular/core/testing';

import { HobbyInfoService } from './hobby-info.service';

describe('HobbyInfoService', () => {
  let service: HobbyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
