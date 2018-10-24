import { TestBed } from '@angular/core/testing';

import { SvgTowerService } from './svg-tower.service';

describe('SvgTowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SvgTowerService = TestBed.get(SvgTowerService);
    expect(service).toBeTruthy();
  });
});
