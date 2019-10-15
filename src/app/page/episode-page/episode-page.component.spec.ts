import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EpisodePageComponent} from './episode-page.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {AppComponent} from '../../app.component';
import {HeaderComponent} from '../../component/shared/header/header.component';
import {PreloaderComponent} from '../../component/shared/preloader/preloader.component';
import {ComingSoonComponent} from '../../component/home-page/coming-soon/coming-soon.component';
import {RecommendedComponent} from '../../component/home-page/recommended/recommended.component';
import {LastViewedComponent} from '../../component/home-page/last-viewed/last-viewed.component';
import {RandomComponent} from '../../component/home-page/random/random.component';
import {ShowPageComponent} from '../show-page/show-page.component';
import {SeasonPageComponent} from '../season-page/season-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginPageComponent} from '../login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('EpisodePageComponent', () => {
  let component: EpisodePageComponent;
  let fixture: ComponentFixture<EpisodePageComponent>;

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
    fixture = TestBed.createComponent(EpisodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
