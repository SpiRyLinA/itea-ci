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
    let lastViewsArr: Map<number, LastViews> = new Map<number, LastViews>();
    if (lastViews != null) {
      lastViewsArr = new Map<number, LastViews>(JSON.parse(lastViews));
    }
    lastViewsArr.set(show.id, new LastViews(show, new Date()));
    localStorage.setItem('lastViewsShows', JSON.stringify(Array.from(lastViewsArr.entries())));
    this.newViewSubject.next();
  }

  public getLastViews(): any[] {
    return Array.from(new Map(JSON.parse(localStorage.getItem('lastViewsShows'))).values());
  }
}
