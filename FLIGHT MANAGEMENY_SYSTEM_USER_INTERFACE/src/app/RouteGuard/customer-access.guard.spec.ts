import { TestBed } from '@angular/core/testing';

import { CustomerAccessGuard } from './customer-access.guard';

describe('CustomerAccessGuard', () => {
  let guard: CustomerAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
