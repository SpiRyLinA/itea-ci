import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowPageComponent} from './page/show-page/show-page.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {SeasonPageComponent} from './page/season-page/season-page.component';
import {EpisodePageComponent} from './page/episode-page/episode-page.component';
import {LoginPageComponent} from './page/login-page/login-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'show/:showId',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ShowPageComponent
      },
      {
        path: 'season/:seasonId',
        component: SeasonPageComponent
      },
      {
        path: 'episode/:episodeId',
        component: EpisodePageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: HomePageComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {
}
