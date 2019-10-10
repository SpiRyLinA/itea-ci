import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {GET_SEASON_EPISODE_API} from '../shared/constant';
import {Episode} from '../shared/model/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private readonly http: HttpClient) { }

  public getEpisodesBySeasonId(seasonId: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(Utils.format(GET_SEASON_EPISODE_API, seasonId));
  }
}
