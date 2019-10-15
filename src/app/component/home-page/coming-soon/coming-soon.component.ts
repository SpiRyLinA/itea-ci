import {Component, OnInit} from '@angular/core';
import {GetScheduleRequest, Schedule} from '../../../model/schedule';
import {ScheduleService} from '../../../service/shared/schedule.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  public schedules: Schedule[];

  constructor(private readonly scheduleService: ScheduleService) {}

  ngOnInit() {
    this.initShows();
  }

  private initShows() {
    const date = new Date();
    const scheduleRequest = new GetScheduleRequest('US', date);
    this.scheduleService.getSchedule(scheduleRequest).subscribe(it => {
      this.schedules = it.filter(filtered => {
        const show = filtered.show;
        return Date.parse(filtered.airstamp) > date.getTime()
          && show != null
          && show.image != null
          && show.image.medium != null;
      }).sort((first, second) => Date.parse(first.airstamp) - Date.parse(second.airstamp))
        .slice(0, 4);
    });
  }
}
