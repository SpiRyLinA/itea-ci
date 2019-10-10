import {Component, OnInit} from '@angular/core';
import {GetScheduleRequest, Schedule} from '../../shared/model/schedule';
import {ScheduleService} from '../../service/schedule.service';
import {LastViews} from '../../shared/model/last-views';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  public schedules: Schedule[];

  constructor(private readonly schedule: ScheduleService) {}

  ngOnInit() {
    const date = new Date();
    const scheduleRequest = new GetScheduleRequest('US', date);
    this.schedule.getSchedule(scheduleRequest).subscribe(it => {
      this.schedules = it.filter(inner => {
        const show = inner.show;
        const time = date.toLocaleTimeString().slice(0, 5);
        return inner.airtime > time && show != null && show.image != null && show.image.medium != null;
      }).sort((first, second) => {
        const firstStamp = first.airstamp;
        const secondStamp = second.airstamp;
        if (firstStamp > secondStamp) {
          return 1;
        } else if (firstStamp < secondStamp) {
          return -1;
        } else {
          return 0;
        }
      }).slice(0, 4);
    });

  }

  saveToLocalStorage(schedule: Schedule): void {
    const lastViews = localStorage.getItem('lastViewsShows');
    let lastViewsArr: LastViews[] = [];
    if (lastViews != null) {
      lastViewsArr = JSON.parse(lastViews);
    }
    lastViewsArr.push(new LastViews(schedule.show.id, new Date()));
    localStorage.setItem('lastViewsShows', JSON.stringify(lastViewsArr));
  }
}
