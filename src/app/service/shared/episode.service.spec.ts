import {TestBed} from '@angular/core/testing';

import {EpisodeService} from './episode.service';
import {HttpClientModule} from '@angular/common/http';

describe('EpisodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }).compileComponents());

  it('should be created', () => {
    const service: EpisodeService = TestBed.get(EpisodeService);
    expect(service).toBeTruthy();
  });
});
