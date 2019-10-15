import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SeasonService} from '../../service/shared/season.service';
import {EpisodeService} from '../../service/shared/episode.service';
import {Season} from '../../model/season';
import {Episode} from '../../model/episode';
import {ShowService} from '../../service/shared/show.service';
import {Show} from '../../model/show';
import {forkJoin} from 'rxjs';
import {StorageService} from '../../service/shared/storage.service';

@Component({
  selector: 'app-season-page',
  templateUrl: './season-page.component.html',
  styleUrls: ['./season-page.component.css']
})
export class SeasonPageComponent implements OnInit {

  public show: Show;
  public season: Season;
  public episodes: Episode[];

  constructor(private readonly route: ActivatedRoute,
              private readonly showService: ShowService,
              private readonly seasonService: SeasonService,
              private readonly episodeService: EpisodeService,
              private readonly storageService: StorageService) {
  }

  ngOnInit() {
    this.initSeason();
  }

  private initSeason(): void {
    this.route.paramMap.subscribe(map => {
      const showId = Number(map.get('showId'));
      const seasonId = Number(map.get('seasonId'));
      forkJoin(
        this.showService.getShowById(showId),
        this.seasonService.getSeasonsById(seasonId),
        this.episodeService.getEpisodesBySeasonId(seasonId),
      ).subscribe(([show, season, episodes]) => {
          this.show = show;
          this.season = season;
          this.episodes = episodes;
          this.saveToLocalStorage(show);
        }
      );
    });
  }

  private saveToLocalStorage(show: Show): void {
    this.storageService.saveLastView(show);
  }
}
