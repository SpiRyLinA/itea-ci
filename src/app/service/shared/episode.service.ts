import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../../utils/utils';
import {GET_EPISODE_BY_ID_API, GET_SEASON_EPISODE_API} from '../../model/constant';
import {Episode} from '../../model/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private readonly http: HttpClient) { }

  public getEpisodesById(episodeId: number): Observable<Episode> {
    return this.http.get<Episode>(Utils.format(GET_EPISODE_BY_ID_API, episodeId));
  }

  public getEpisodesBySeasonId(seasonId: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(Utils.format(GET_SEASON_EPISODE_API, seasonId));
  }
}
