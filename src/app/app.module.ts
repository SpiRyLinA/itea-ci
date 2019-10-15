import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './component/shared/header/header.component';
import {PreloaderComponent} from './component/shared/preloader/preloader.component';
import {ComingSoonComponent} from './component/home-page/coming-soon/coming-soon.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {RecommendedComponent} from './component/home-page/recommended/recommended.component';
import {LastViewedComponent} from './component/home-page/last-viewed/last-viewed.component';
import {RandomComponent} from './component/home-page/random/random.component';
import {ShowPageComponent} from './page/show-page/show-page.component';
import {AppRoutingModule} from './app-routing.module';
import {SeasonPageComponent} from './page/season-page/season-page.component';
import {EpisodePageComponent} from './page/episode-page/episode-page.component';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
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
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
