import { TestBed } from '@angular/core/testing';

import { JewelProviderService } from './jewel-provider.service';

describe('JewelProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JewelProviderService = TestBed.get(JewelProviderService);
    expect(service).toBeTruthy();
  });
});
