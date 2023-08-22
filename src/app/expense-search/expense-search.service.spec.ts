import { TestBed } from '@angular/core/testing';

import { ExpenseSearchService } from './expense-search.service';

describe('ExpenseSearchService', () => {
  let service: ExpenseSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
