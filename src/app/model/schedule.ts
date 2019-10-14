import {Image, Links} from './common';
import {Show} from './show';

export interface Schedule {
  id: number;
  url: string;
  name: string;
  season: number;
  number?: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Image;
  summary: string;
  show: Show;
  _links: Links;
}

export class GetScheduleRequest {
  country: string;
  date: Date;

  constructor(country: string, date: Date) {
    this.country = country;
    this.date = date;
  }
}
