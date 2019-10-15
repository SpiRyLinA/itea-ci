import {TestBed} from '@angular/core/testing';

import {SeasonService} from './season.service';
import {HttpClientModule} from '@angular/common/http';

describe('SeasonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }).compileComponents());

  it('should be created', () => {
    const service: SeasonService = TestBed.get(SeasonService);
    expect(service).toBeTruthy();
  });
});
