import { TestBed } from '@angular/core/testing';

import { UploadViewService } from './upload-view.service';

describe('UploadViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadViewService = TestBed.get(UploadViewService);
    expect(service).toBeTruthy();
  });
});
