import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewedComponent } from './last-viewed.component';
import {HttpClientModule} from '@angular/common/http';

describe('LastViewedComponent', () => {
  let component: LastViewedComponent;
  let fixture: ComponentFixture<LastViewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastViewedComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
