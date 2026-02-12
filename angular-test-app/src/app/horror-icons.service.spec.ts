import { TestBed } from '@angular/core/testing';

import { HorrorIconsService } from './horror-icons.service';

describe('HorrorIconsService', () => {
  let service: HorrorIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorrorIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
