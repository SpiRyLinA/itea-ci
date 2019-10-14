import {Show} from './show';

export class LastViews {
  show: Show;
  lastView: Date;

  constructor(show: Show, lastView: Date) {
    this.show = show;
    this.lastView = lastView;
  }
}
