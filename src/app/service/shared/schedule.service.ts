import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetScheduleRequest, Schedule} from '../../model/schedule';
import {GET_SCHEDULE_API} from '../../model/constant';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private readonly http: HttpClient) { }

  public getSchedule(request: GetScheduleRequest): Observable<Schedule[]> {
    const params = new HttpParams()
      .set('country', request.country)
      .set('date', request.date.toISOString().slice(0, 10));
    return this.http.get<Schedule[]>(GET_SCHEDULE_API, {params});
  }
}
