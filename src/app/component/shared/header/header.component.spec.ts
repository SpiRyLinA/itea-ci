import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../../app-routing.module';
import {HomePageComponent} from '../../../page/home-page/home-page.component';
import {AppComponent} from '../../../app.component';
import {PreloaderComponent} from '../preloader/preloader.component';
import {ComingSoonComponent} from '../../home-page/coming-soon/coming-soon.component';
import {RecommendedComponent} from '../../home-page/recommended/recommended.component';
import {LastViewedComponent} from '../../home-page/last-viewed/last-viewed.component';
import {RandomComponent} from '../../home-page/random/random.component';
import {ShowPageComponent} from '../../../page/show-page/show-page.component';
import {SeasonPageComponent} from '../../../page/season-page/season-page.component';
import {EpisodePageComponent} from '../../../page/episode-page/episode-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPageComponent} from '../../../page/login-page/login-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
