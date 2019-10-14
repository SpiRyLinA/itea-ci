import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedComponent } from './recommended.component';
import {HttpClientModule} from '@angular/common/http';
import {PreloaderComponent} from '../../shared/preloader/preloader.component';

describe('RecommendedComponent', () => {
  let component: RecommendedComponent;
  let fixture: ComponentFixture<RecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecommendedComponent,
        PreloaderComponent
      ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
