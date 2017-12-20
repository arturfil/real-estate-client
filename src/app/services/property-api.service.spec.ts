import { TestBed, inject } from '@angular/core/testing';

import { PropertyApiService } from './property-api.service';

describe('PropertyApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyApiService]
    });
  });

  it('should be created', inject([PropertyApiService], (service: PropertyApiService) => {
    expect(service).toBeTruthy();
  }));
});
