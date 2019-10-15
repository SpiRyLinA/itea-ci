import {Component, OnInit} from '@angular/core';
import {Show} from '../../../model/show';
import {ShowService} from '../../../service/shared/show.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public shows: Show[];

  constructor(private readonly showService: ShowService) { }

  ngOnInit() {
    this.initRandomShows();
  }

  private initRandomShows(): void {
    this.showService.getShows().subscribe(shows => {
      if (shows != null && shows.length) {
        this.shows = [];
        for (let i = 0; i < 4; i++) {
          this.shows.push(shows[Math.floor(Math.random() * shows.length)]);
        }
      }
    });
  }

}
