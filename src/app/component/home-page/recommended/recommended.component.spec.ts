import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecommendedComponent} from './recommended.component';
import {HomePageComponent} from '../../../page/home-page/home-page.component';
import {AppComponent} from '../../../app.component';
import {HeaderComponent} from '../../shared/header/header.component';
import {PreloaderComponent} from '../../shared/preloader/preloader.component';
import {ComingSoonComponent} from '../coming-soon/coming-soon.component';
import {LastViewedComponent} from '../last-viewed/last-viewed.component';
import {RandomComponent} from '../random/random.component';
import {ShowPageComponent} from '../../../page/show-page/show-page.component';
import {SeasonPageComponent} from '../../../page/season-page/season-page.component';
import {EpisodePageComponent} from '../../../page/episode-page/episode-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginPageComponent} from '../../../page/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('RecommendedComponent', () => {
  let component: RecommendedComponent;
  let fixture: ComponentFixture<RecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PreloaderComponent,
        ComingSoonComponent,
        HomePageComponent,
        RecommendedComponent,
        LastViewedComponent,
        RandomComponent,
        ShowPageComponent,
        SeasonPageComponent,
        EpisodePageComponent,
        LoginPageComponent,
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
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
