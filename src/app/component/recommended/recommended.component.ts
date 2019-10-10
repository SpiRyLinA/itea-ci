import { Component, OnInit } from '@angular/core';
import {ShowService} from '../../service/show.service';
import {Show} from '../../shared/model/show';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  public recommendedShow: Show;

  constructor(private readonly showService: ShowService) { }

  ngOnInit() {
    this.showService.getShowById(6771).subscribe(show => this.recommendedShow = show);
  }

}
