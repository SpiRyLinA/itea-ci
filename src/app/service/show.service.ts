import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../shared/model/show';
import {GET_SHOW_BY_ID_API} from '../shared/constant';
import {Utils} from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private readonly http: HttpClient) { }

  public getShowById(showId: number): Observable<Show> {
    return this.http.get<Show>(Utils.format(GET_SHOW_BY_ID_API, showId));
  }
}
