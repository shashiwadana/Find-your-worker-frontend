import { TestBed } from '@angular/core/testing';

import { WorkerRequestsService } from './worker-requests.service';

describe('WorkerRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerRequestsService = TestBed.get(WorkerRequestsService);
    expect(service).toBeTruthy();
  });
});
