import { TestBed } from '@angular/core/testing';

import { DecisionMakingService } from './decision-making.service';

describe('DecisionMakingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecisionMakingService = TestBed.get(DecisionMakingService);
    expect(service).toBeTruthy();
  });
});
