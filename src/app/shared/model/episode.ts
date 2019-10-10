import {Image, Links} from './common';

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: Date;
  runtime: number;
  image: Image;
  summary: string;
  _links: Links;
}
