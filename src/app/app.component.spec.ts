import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './component/shared/header/header.component';
import {PreloaderComponent} from './component/shared/preloader/preloader.component';
import {ComingSoonComponent} from './component/home-page/coming-soon/coming-soon.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {RecommendedComponent} from './component/home-page/recommended/recommended.component';
import {LastViewedComponent} from './component/home-page/last-viewed/last-viewed.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RandomComponent} from './component/home-page/random/random.component';
import {appRoutes} from './app.module';

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
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
