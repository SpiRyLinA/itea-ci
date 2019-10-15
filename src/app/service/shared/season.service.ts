import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../../utils/utils';
import {GET_SEASON_BY_ID_API, GET_SHOW_SEASON_API} from '../../model/constant';
import {Season} from '../../model/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private readonly http: HttpClient) { }

  public getSeasonsById(seasonId: number): Observable<Season> {
    return this.http.get<Season>(Utils.format(GET_SEASON_BY_ID_API, seasonId));
  }

  public getSeasonsByShowId(showId: number): Observable<Season[]> {
    return this.http.get<Season[]>(Utils.format(GET_SHOW_SEASON_API, showId));
  }
}
