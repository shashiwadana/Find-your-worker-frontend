import { TestBed } from '@angular/core/testing';

import { CompletedServicesService } from './completed-services.service';

describe('CompletedServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedServicesService = TestBed.get(CompletedServicesService);
    expect(service).toBeTruthy();
  });
});
