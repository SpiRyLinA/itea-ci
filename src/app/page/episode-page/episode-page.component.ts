import {Component, OnInit} from '@angular/core';
import {Show} from '../../model/show';
import {Episode} from '../../model/episode';
import {ActivatedRoute} from '@angular/router';
import {ShowService} from '../../service/shared/show.service';
import {EpisodeService} from '../../service/shared/episode.service';
import {forkJoin} from 'rxjs';
import {StorageService} from '../../service/shared/storage.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})
export class EpisodePageComponent implements OnInit {

  public show: Show;
  public episode: Episode;

  constructor(private readonly route: ActivatedRoute,
              private readonly showService: ShowService,
              private readonly episodeService: EpisodeService,
              private readonly storageService: StorageService) {
  }

  ngOnInit() {
    this.initSeason();
  }

  private initSeason(): void {
    this.route.paramMap.subscribe(map => {
      const showId = Number(map.get('showId'));
      const episodeId = Number(map.get('episodeId'));
      forkJoin(
        this.showService.getShowById(showId),
        this.episodeService.getEpisodesById(episodeId),
      ).subscribe(([show, episode]) => {
          this.show = show;
          this.episode = episode;
          this.saveToLocalStorage(show);
        }
      );
    });
  }

  private saveToLocalStorage(show: Show): void {
    this.storageService.saveLastView(show);
  }
}
