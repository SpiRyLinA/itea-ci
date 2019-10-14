import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import {AppComponent} from '../../app.component';
import {HeaderComponent} from '../../component/shared/header/header.component';
import {PreloaderComponent} from '../../component/shared/preloader/preloader.component';
import {ComingSoonComponent} from '../../component/home-page/coming-soon/coming-soon.component';
import {RecommendedComponent} from '../../component/home-page/recommended/recommended.component';
import {LastViewedComponent} from '../../component/home-page/last-viewed/last-viewed.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../../app.module';
import {RandomComponent} from '../../component/home-page/random/random.component';

describe('HomeComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

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
        RandomComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
