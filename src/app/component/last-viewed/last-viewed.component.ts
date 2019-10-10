import {Component, OnInit} from '@angular/core';
import {ShowService} from '../../service/show.service';
import {LastViews} from '../../shared/model/last-views';

@Component({
  selector: 'app-last-viewed',
  templateUrl: './last-viewed.component.html',
  styleUrls: ['./last-viewed.component.css']
})
export class LastViewedComponent implements OnInit {

  public lastViewsShows: LastViews[];

  constructor(private readonly showService: ShowService) {}

  ngOnInit() {
    const lastViewsShows = localStorage.getItem('lastViewsShows');
    let lastViewsArr: LastViews[] = [];
    if (lastViewsShows != null) {
      lastViewsArr = JSON.parse(lastViewsShows);
    }
    lastViewsArr.forEach(lastView => {
      this.showService.getShowById(lastView.showId).subscribe(show => {
        lastView.show = show;
        this.lastViewsShows.push(lastView);
      });
    });
  }

}
