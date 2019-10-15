import {Component, OnInit} from '@angular/core';
import {ShowService} from '../../../service/shared/show.service';
import {Show} from '../../../model/show';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  public recommendedShow: Show;

  constructor(private readonly showService: ShowService) { }

  ngOnInit() {
    this.initShow();
  }

  private initShow(): void {
    this.showService.getShowById(6771).subscribe(show => this.recommendedShow = show);
  }

}
