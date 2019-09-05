import { TestBed } from '@angular/core/testing';

import { WokerDataService } from './woker-data.service';

describe('WokerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WokerDataService = TestBed.get(WokerDataService);
    expect(service).toBeTruthy();
  });
});
