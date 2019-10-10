import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScheduleService} from './service/schedule.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { PreloaderComponent } from './component/preloader/preloader.component';
import { ComingSoonComponent } from './component/coming-soon/coming-soon.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { RecommendedComponent } from './component/recommended/recommended.component';
import { LastViewedComponent } from './component/last-viewed/last-viewed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreloaderComponent,
    ComingSoonComponent,
    HomePageComponent,
    RecommendedComponent,
    LastViewedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
