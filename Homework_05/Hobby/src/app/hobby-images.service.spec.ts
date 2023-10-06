import { TestBed } from '@angular/core/testing';

import { HobbyImagesService } from './hobby-images.service';

describe('HobbyImagesService', () => {
  let service: HobbyImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbyImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
