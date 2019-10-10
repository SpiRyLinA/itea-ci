import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils/utils';
import {GET_SHOW_SEASON_API} from '../shared/constant';
import {Season} from '../shared/model/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private readonly http: HttpClient) { }

  public getSeasonsByShowId(showId: number): Observable<Season[]> {
    return this.http.get<Season[]>(Utils.format(GET_SHOW_SEASON_API, showId));
  }
}
