import { TestBed, inject } from '@angular/core/testing';

import { ConfirmationdialogService } from './confirmationdialog.service';

describe('ConfirmationdialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmationdialogService]
    });
  });

  it('should be created', inject([ConfirmationdialogService], (service: ConfirmationdialogService) => {
    expect(service).toBeTruthy();
  }));
});
