import {Component, OnInit} from '@angular/core';
import {LastViews} from '../../../model/last-views';
import {StorageService} from '../../../service/shared/storage.service';

@Component({
  selector: 'app-last-viewed',
  templateUrl: './last-viewed.component.html',
  styleUrls: ['./last-viewed.component.css']
})
export class LastViewedComponent implements OnInit {

  public lastViewsShows: LastViews[];

  constructor(private readonly storageService: StorageService) {
  }

  ngOnInit() {
    this.initLasViews();

  }

  private initLasViews() {
    this.fillLastViews();
    this.storageService.newViewObservable.subscribe(() => this.fillLastViews());
  }

  private fillLastViews() {
    let lastViews = this.storageService.getLastViews();
    if (lastViews != null) {
      lastViews = lastViews
        .sort((first, second) => new Date(second.lastView).getTime() - new Date(first.lastView).getTime())
        .slice(0, 4);
    }
    this.lastViewsShows = lastViews;
  }

}
