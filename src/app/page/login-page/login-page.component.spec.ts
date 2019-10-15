import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginPageComponent} from './login-page.component';
import {AppComponent} from '../../app.component';
import {HeaderComponent} from '../../component/shared/header/header.component';
import {PreloaderComponent} from '../../component/shared/preloader/preloader.component';
import {ComingSoonComponent} from '../../component/home-page/coming-soon/coming-soon.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {RecommendedComponent} from '../../component/home-page/recommended/recommended.component';
import {LastViewedComponent} from '../../component/home-page/last-viewed/last-viewed.component';
import {RandomComponent} from '../../component/home-page/random/random.component';
import {ShowPageComponent} from '../show-page/show-page.component';
import {SeasonPageComponent} from '../season-page/season-page.component';
import {EpisodePageComponent} from '../episode-page/episode-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent,
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
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
