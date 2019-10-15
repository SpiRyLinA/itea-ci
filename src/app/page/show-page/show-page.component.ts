import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowService} from '../../service/shared/show.service';
import {Show} from '../../model/show';
import {Season} from '../../model/season';
import {SeasonService} from '../../service/shared/season.service';
import {forkJoin} from 'rxjs';
import {StorageService} from '../../service/shared/storage.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {

  public show: Show;
  public seasons: Season[];

  constructor(private readonly route: ActivatedRoute,
              private readonly showService: ShowService,
              private readonly seasonService: SeasonService,
              private readonly storageService: StorageService) {
  }

  ngOnInit() {
    this.initShow();
  }

  private initShow(): void {
    this.route.paramMap.subscribe(map => {
      const showId = Number(map.get('showId'));
      forkJoin(
        this.showService.getShowById(showId),
        this.seasonService.getSeasonsByShowId(showId)
      ).subscribe(([show, seasons]) => {
        this.show = show;
        this.show.rating.average = Math.floor(this.show.rating.average);
        this.seasons = seasons;
        this.saveToLocalStorage(show);
      });
    });
  }

  private saveToLocalStorage(show: Show): void {
    this.storageService.saveLastView(show);
  }

}
