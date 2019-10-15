import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RandomComponent} from './component/home-page/random/random.component';
import {LastViewedComponent} from './component/home-page/last-viewed/last-viewed.component';
import {RecommendedComponent} from './component/home-page/recommended/recommended.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {ComingSoonComponent} from './component/home-page/coming-soon/coming-soon.component';
import {PreloaderComponent} from './component/shared/preloader/preloader.component';
import {HeaderComponent} from './component/shared/header/header.component';
import {ShowPageComponent} from './page/show-page/show-page.component';
import {SeasonPageComponent} from './page/season-page/season-page.component';
import {EpisodePageComponent} from './page/episode-page/episode-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
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
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
