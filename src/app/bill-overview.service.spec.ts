import { TestBed } from '@angular/core/testing';

import { BillOverviewService } from './manage-bill/bill-overview/service/bill-overview.service';

describe('BillOverviewService', () => {
  let service: BillOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
