import { TestBed } from '@angular/core/testing';

import { WaterDairyService } from './water-dairy.service';

describe('WaterDairyService', () => {
  let service: WaterDairyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterDairyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
