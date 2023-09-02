import { TestBed } from '@angular/core/testing';

import { EstadoServiceTsService } from './estado.service.ts.service';

describe('EstadoServiceTsService', () => {
  let service: EstadoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
