import { TestBed } from '@angular/core/testing';

import { CidadeServiceTsService } from './cidade.service.ts.service';

describe('CidadeServiceTsService', () => {
  let service: CidadeServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
