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
import {RouterModule, Routes} from '@angular/router';
import { RandomComponent } from './component/home-page/random/random.component';

export const appRoutes: Routes = [
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
