import {Show} from './show';

export class LastViews {
  showId: number;
  show: Show;
  lastView: Date;

  constructor(showId: number, lastView: Date) {
    this.showId = showId;
    this.lastView = lastView;
  }
}
