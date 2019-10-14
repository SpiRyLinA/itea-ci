import { TestBed } from '@angular/core/testing';

import { ShowService } from './show.service';
import {HttpClientModule} from '@angular/common/http';

describe('ShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }).compileComponents());

  it('should be created', () => {
    const service: ShowService = TestBed.get(ShowService);
    expect(service).toBeTruthy();
  });
});
