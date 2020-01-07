import { TestBed } from '@angular/core/testing';

import { StatusPositionService } from './status-position.service';

describe('StatusPositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusPositionService = TestBed.get(StatusPositionService);
    expect(service).toBeTruthy();
  });
});
