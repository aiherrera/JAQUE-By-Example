import { TestBed } from '@angular/core/testing';

import { LinealGraphicService } from './lineal-graphic.service';

describe('LinealGraphicService', () => {
  let service: LinealGraphicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinealGraphicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
