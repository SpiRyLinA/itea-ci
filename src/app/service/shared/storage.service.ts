import {Injectable} from '@angular/core';
import {LastViews} from '../../model/last-views';
import {Subject} from 'rxjs';
import {Show} from '../../model/show';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private newViewSubject = new Subject();
  public newViewObservable = this.newViewSubject.asObservable();

  constructor() { }

  public saveLastView(show: Show): void {
    const lastViews = localStorage.getItem('lastViewsShows');
    let lastViewsArr: LastViews[] = [];
    if (lastViews != null) {
      lastViewsArr = JSON.parse(lastViews);
    }
    lastViewsArr.push(new LastViews(show, new Date()));
    localStorage.setItem('lastViewsShows', JSON.stringify(lastViewsArr));
    this.newViewSubject.next();
  }

  public getLastViews(): LastViews[] {
    return JSON.parse(localStorage.getItem('lastViewsShows'));
  }
}
