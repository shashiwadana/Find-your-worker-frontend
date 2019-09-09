import { TestBed } from '@angular/core/testing';

import { BookLaterService } from './book-later.service';

describe('BookLaterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookLaterService = TestBed.get(BookLaterService);
    expect(service).toBeTruthy();
  });
});
